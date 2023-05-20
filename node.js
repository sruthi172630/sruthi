const userInput = document.querySelector("#textareaInput")
const postData = document.querySelector("#post-data")
const postButton = document.querySelector("#post-btn")
let uwerInput;
const usserInputHandler = (e) => {
    uwerInput = e.target.value
}
const postClickHandler = () => {
    postData.textContent = uwerInput
}

userInput.addEventListener("input", usserInputHandler)
postButton.addEventListener("click", postClickHandler)