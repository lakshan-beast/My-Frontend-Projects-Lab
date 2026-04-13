const openModalbtnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = modalElement.querySelector(".modal__content");

openModalbtnElement.addEventListener("click", () => {
  modalElement.classList.add("open");
});

modalContentElement.addEventListener("click", () => {
  modalElement.classList.remove("open");
});
