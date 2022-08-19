const textInput = document.getElementById("textToEncript");
const menu = document.querySelector(".menu");

textInput.value = "Ingrese el texto aqui";

textInput.addEventListener("focus", () => {
    if (textInput.value == "Ingrese el texto aqui") {
        textInput.value = "";
    }
});

textInput.addEventListener("blur", () => {
    if (textInput.value == "") {
        textInput.value = "Ingrese el texto aqui";
    }
})