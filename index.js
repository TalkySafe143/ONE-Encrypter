const textInput = document.getElementById("textToEncript");
const menuNoText = document.querySelector(".noText");
const menuText = document.querySelector(".existText");
const finalText = document.querySelector(".finalText");
const [ encryptButton, decryptButton, copyButton ] = document.querySelectorAll("button");

const cryptKeys = [
    {
        replaceText: 'a',
        newText: 'ai'
    },
    {
        replaceText: 'e',
        newText: 'enter'
    },
    {
        replaceText: 'i',
        newText: 'imes'
    },
    {
        replaceText: 'o',
        newText: 'ober'
    },
    {
        replaceText: 'u',
        newText: 'ufat'
    }
];


function encryptText(sentence) {
    let chars = sentence.split("");

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < cryptKeys.length; j++) {
            if (cryptKeys[j].replaceText == chars[i]) {
                chars[i] = cryptKeys[j].newText;
                break;
            }
        }
    }

    return chars.join("");
}

function decryptText(sentence) {
    for (let i = 0; i < cryptKeys.length; i++) {
        sentence = sentence.replaceAll(cryptKeys[i].newText, cryptKeys[i].replaceText);
    }

    return sentence;
}

encryptButton.addEventListener("click", () => {
    let encryptedText;
    if (textInput.value == "") {
        menuNoText.style.display = "flex";
        menuText.style.display = "none";
    } else {
        encryptedText = encryptText(textInput.value);
        copyButton.style.color = "#0A3871";
        copyButton.style.backgroundColor = "white";
        menuNoText.style.display = "none";
        menuText.style.display = "flex";
        finalText.innerHTML = encryptedText;
    }
})

decryptButton.addEventListener("click", () => {
    let descryptedText;
    if (textInput.value == "") {
        menuNoText.style.display = "flex";
        menuText.style.display = "none";
    } else {
        descryptedText = decryptText(textInput.value);
        copyButton.style.color = "#0A3871";
        copyButton.style.backgroundColor = "white";
        menuNoText.style.display = "none";
        menuText.style.display = "flex";
        finalText.innerHTML = descryptedText;
    }
})

copyButton.addEventListener("click", () => {
    const type = "text/plain";
    const blob = new Blob([ finalText.textContent ], { type });
    const data = [new ClipboardItem({ [type]: blob })];


    navigator.clipboard.write(data)
        .then(() => {
        copyButton.style.color = "white";
        copyButton.style.backgroundColor = "green";
    })
        .catch(err => {
        console.error(err);
    })
})
