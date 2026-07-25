/**
 * Enquiry form.
 *
 * ENDPOINT holds the URL of the company's own Google Apps Script web app.
 * While it is empty the form stays inert and points the visitor at the
 * published email address, so an enquiry is never silently lost.
 */
const ENDPOINT = "";

const form = document.querySelector(".form");
const note = document.querySelector(".form-note");

const TEXT = {
  en: {
    sending: "Sending…",
    sent: "Thank you. Your enquiry has been sent — we will reply to the address you provided.",
    failed: "The message could not be sent. Please write to info@iberoiltradearbitrage.com.",
    inert: "Thank you. Please write to info@iberoiltradearbitrage.com while the form is being connected.",
  },
  es: {
    sending: "Enviando…",
    sent: "Gracias. Su consulta ha sido enviada — le responderemos a la dirección indicada.",
    failed: "No se pudo enviar el mensaje. Escríbanos a info@iberoiltradearbitrage.com.",
    inert: "Gracias. Escríbanos a info@iberoiltradearbitrage.com mientras se conecta el formulario.",
  },
};

const t = TEXT[document.documentElement.lang === "es" ? "es" : "en"];

if (form && note) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!ENDPOINT) {
      note.textContent = t.inert;
      return;
    }

    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    note.textContent = t.sending;

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(new FormData(form)),
      });
      note.textContent = t.sent;
      form.reset();
    } catch (error) {
      note.textContent = t.failed;
    } finally {
      button.disabled = false;
    }
  });
}
