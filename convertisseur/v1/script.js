const eu = document.getElementById("Euro");
const dna = document.getElementById("Dollar-Americain");
const da = document.getElementById("Dollar-Australien");
const button = document.getElementById("boutton-conversion")

let dernierval = null;

eu.addEventListener("input", () => {
    dernierval = "eu";
})

dna.addEventListener("input", () => {
    dernierval = "dna";
})

da.addEventListener("input", () => {
    dernierval = "da";
})

button.addEventListener("click", () => {
    if (dernierval === "eu"){
        dna.value = eu.value * 1.18.toFixed(2);
        da.value = eu.value * 1.77.toFixed(2); 
    }
    else if (dernierval === "dna"){
        eu.value = dna.value * 0.85.toFixed(2);
        da.value = dna.value * 1.5.toFixed(2);
    }
    else if(dernierval === "da"){
        eu.value = da.value * 0.56.toFixed(2);
        dna.value = da.value * 0.67.toFixed(2);
    }
    else {
        alert("Veuillez entrer une valeur !!!!!!!");
    }
})