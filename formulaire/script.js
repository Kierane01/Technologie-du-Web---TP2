const lienWiki = document.querySelector(".wiki-link");

lienWiki.href = lienWiki.href.replace("en.wikipedia.org", "fr.wikipedia.org");

const firstInput = document.querySelector(".text-input");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    if (!((firstInput === "Oui") || (firstInput === "Non"))){
        firstInput.placeholder = firstInput.placeholder.replace("Premiers pas avec Javascript", "Il faut mettre Oui ou Non.");
    }
})

let choix = document.getElementById("choix1").parentNode;
let textes = [" HP", " Casque", " Bluetooth"];

for (let i = 0; i < textes.length; i++) {
    choix.childNodes.forEach(node => {
        if (node.nodeType === 3) node.textContent = textes[i];
    });
    
    let next = choix.nextSibling;
    while (next && next.nodeType !== 1) next = next.nextSibling;
    choix = next;
}

const choix1 = document.getElementById("choix1");
const choix2 = document.getElementById("choix2");
const choix3 = document.getElementById("choix3");
const volume = document.getElementById("volume-text");

choix1.addEventListener("input", () => {
    volume.textContent = "Volume HP";
})

choix2.addEventListener("input", () => {
    volume.textContent = "Volume Casque";
})

choix3.addEventListener("input", () => {
    volume.textContent = "Volume BLuetooth";
})

const vbar = document.getElementById("volume-bar");

vbar.setAttribute("max", "100");

console.log(vbar.max);

const affichage = document.getElementById("affichage");

function updateValue(val){
    affichage.textContent = val;
}

affichage.textContent = vbar.value;

const mute = document.querySelector("div.row label[for='ouinon']");

mute.firstChild.textContent = " Mute";

mute.lastChild.addEventListener("change", () => {
    if (mute.lastChild.checked){
        vbar.value = 0;
        affichage.textContent = vbar.value;
    }
    else {
        vbar.value = 50;
        affichage.textContent = vbar.value;
    }
})

const logo = document.getElementsByClassName("logo-wrap");
const newLogo = document.createElement("img");

newLogo.setAttribute("src", " https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg");
newLogo.setAttribute("width", "200px");

logo[0].appendChild(newLogo)