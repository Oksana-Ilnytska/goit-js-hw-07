const input = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 30;
  let boxesHTML = ""; 
  for (let i = 0; i < amount; i++) {
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
   size += 10; 
  }
  boxes.innerHTML = boxesHTML; 
}

btnCreate.addEventListener("click", () => {
const inputValue = Number(input.value);
if (inputValue >= 1 && inputValue <= 100) {
 createBoxes(inputValue);
 input.value = "";
} else {
  alert("Please enter a number between 1 and 100");
}
})

btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});


