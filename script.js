const form = document.querySelector(".form");
const note = document.querySelector(".form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent = "Thank you. Please write to stevensales@iberoiltradearbitrage.com while the form is being connected.";
  });
}
