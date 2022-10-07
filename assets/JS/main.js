// Scrivere un programma che chieda all’utente:


document.getElementById('genera').addEventListener('click', function () {
    console.log('hai cliccato genera');

    // Il numero di chilometri da percorrere
    const km = document.getElementById('km').value
    // Età del passeggero Sulla base di queste informazioni dovrà 
    const userAge = document.getElementById('userAge').value

    console.log(km);
    console.log(userAge);

    // calcolare il prezzo totale del biglietto di viaggio
    if (userAge < 18) {
        discount = 0.20
        console.log(discount);
    } else if (userAge > 65) {
        discount = 0.40
        console.log(discount);
    } else {
        discount = 0
        console.log(discount);
    }
    const price = km * 1
    const finalPrice = price - (price * discount)
    console.log(finalPrice);


});


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.