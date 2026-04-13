const subButtonElement = document.getElementById("counterSub");
const addButtonElement = document.getElementById("counterAdd");

const counterDisplayElement = document.getElementById("counterDisplay");

let total = 0;
const limit = 30;

const updateCounterDisplay = () => {
  if (total > limit) {
    total = limit;
  }
  if (total < 0) {
    total = 0;
  }
  counterDisplayElement.textContent = total;
  document.body.style.setProperty(
    "background-color",
    `rgb(${(total / limit) * 255}, 50, 0)`,
  );
};

addButtonElement.addEventListener("click", () => {
  total += 1;
  updateCounterDisplay();
});
subButtonElement.addEventListener("click", () => {
  total -= 1;
  updateCounterDisplay();
});
