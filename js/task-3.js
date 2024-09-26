const userName = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");

const handleType = () => {
    outPut.textContent = userName.value.trim() ? userName.value.trim() : "Anonymous";
}
userName.addEventListener("input", handleType);
