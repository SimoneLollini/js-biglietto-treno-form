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
    const price = km * 1
    const under = document.getElementById('under').checked
    const over = document.getElementById('over').checked
    const maggiorenne = document.getElementById('maggiorenne').checked

    if (under == true) {
        discount = 0.20
        document.getElementById("discount").innerHTML = "Sconto Minorenne";
    } else if (over == true) {
        discount = 0.40
        document.getElementById("discount").innerHTML = "Sconto Over-65";


    } else {
        discount = 0
        document.getElementById("discount").innerHTML = "Prezzo pieno";
    }

    const finalPrice = (price - (price * discount)).toFixed(2)
    console.log(finalPrice);
    document.getElementById("ticket_price").innerHTML = finalPrice + " " + "€"

    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 100000);
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 11);

    const name = document.getElementById('name').value;
    document.getElementById("user_name").innerHTML = " " + name
    console.log(name);
});
