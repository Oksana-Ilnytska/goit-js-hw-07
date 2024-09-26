const getButton = document.querySelector(".change-color");
const getColor = document.querySelector(".color");
const body = document.querySelector("body");

getButton.addEventListener("click",() => {
 const randomColor = getRandomHexColor();
 body.style.backgroundColor = randomColor;
 getColor.textContent = randomColor;
}); 




console.log(getColor.style.backgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 