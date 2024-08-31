const liNumber = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${liNumber.length}`);

liNumber.forEach((item) => {
const titleName = item.querySelector("h2")
const result = titleName.textContent;
const numberLi = item.querySelectorAll("ul li");
console.log(`Category: ${result} Elements: ${numberLi.length}`);
});





