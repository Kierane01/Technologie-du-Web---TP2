const eu = document.getElementById("Euro");
const dna = document.getElementById("Dollar-Americain");
const da = document.getElementById("Dollar-Australien");

eu.addEventListener("input", () => {
    dna.value = eu.value * 1.18.toFixed(2);
    da.value = eu.value * 1.77.toFixed(2); 
})

dna.addEventListener("input", () => {
    eu.value = dna.value * 0.85.toFixed(2);
    da.value = dna.value * 1.5.toFixed(2);
})

da.addEventListener("input", () => {
    eu.value = da.value * 0.56.toFixed(2);
    dna.value = da.value * 0.67.toFixed(2);
})