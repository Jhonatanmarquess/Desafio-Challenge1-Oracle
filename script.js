const criptografia = ["enter", "imes", "ai", "ober", "ufat"];
const descriptografia = ["e", "i", "a", "o", "u"];

const inputText = document.getElementById("inputText");

const bCriptografar = document.getElementById("bCriptografar");
const bDescriptografar = document.getElementById("bDescriptografar");
const copia = document.querySelector("#copia");

bCriptografar.addEventListener("click", criptografar);
bDescriptografar.addEventListener("click", descriptografar);
copia.addEventListener("click", copiar);

function criptografar() {
    let texto = inputText.value;
    let resultado = "";

    if (texto != "") {

        resultado = texto.replace(/e|i|a|o|u/g, function (x) {
            if (x == "e") {
                return criptografia[0];
            }
            else if (x == "i") {
                return criptografia[1];
            }
            else if (x == "a") {
                return criptografia[2];
            }
            else if (x == "o") {
                return criptografia[3];
            }
            else if (x == "u") {
                return criptografia[4];
            }


        })

        exibirResultado(resultado);
        limparInput();

    }
}

function descriptografar() {
    let texto = inputText.value;
    let resultado = "";

    if (texto != "") {


        resultado = texto.replace(/enter|imes|ai|ober|ufat/g, function (x) {
            if (x == "enter") {
                return descriptografia[0];
            }
            else if (x == "imes") {
                return descriptografia[1];
            }
            else if (x == "ai") {
                return descriptografia[2];
            }
            else if (x == "ober") {
                return descriptografia[3];
            }
            else if (x == "ufat") {
                return descriptografia[4];
            }
        })

        exibirResultado(resultado);
        limparInput();
    }
}

function exibirResultado(texto) {
    let exibe = document.querySelector("#msgP");
    let divImg = document.querySelector(".divImg");

    divImg.style.display = "none";

    exibe.textContent = texto;    

    copia.style.display = "block";

}

async function copiar(){
    let msgP = document.querySelector("#msgP").textContent;
    await navigator.clipboard.writeText(msgP);
}

window.onload = function () {
    limparInput();
}

function limparInput() {
    inputText.value = "";
}

