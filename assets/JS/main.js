// Scrivere un programma che chieda all’utente:


document.getElementById('genera').addEventListener('click', function () {
    console.log('hai cliccato genera');

    // Il numero di chilometri da percorrere
    const km = document.getElementById('km').value
    // Età del passeggero Sulla base di queste informazioni dovrà 
    // const userAge = document.getElementById('userAge').value

    console.log(km);
    // console.log(userAge);

    // calcolare il prezzo totale del biglietto di viaggio
    const price = km * 0.21
    const under = document.getElementById('under').checked
    const over = document.getElementById('over').checked
    const maggiorenne = document.getElementById('maggiorenne').checked

    if (under == true) {
        discount = 0.20

    } else if (over == true) {
        discount = 0.40

    } else {
        discount = 0

    }

    const finalPrice = price - (price * discount)
    console.log(finalPrice.toFixed(2));
});


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.