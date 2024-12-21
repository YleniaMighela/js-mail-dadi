// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Generare un numero randome da 1 a 6 per il giocatore

let playerRandom = Math.floor(Math.random() *6) +1;
console.log("il tuo numero é", playerRandom);



// Generare un numero randome da 1 a 6 per il computer
let pcRandom = Math.floor(Math.random() *6) +1;
console.log("Il numero del Pc", pcRandom);


// SE il punteggio è più alto hai vinto

if (playerRandom > pcRandom){
    console.log("Hai vinto");
}


//    SE il punteggio è basso hai perso

else if (playerRandom < pcRandom){
    console.log("Ha vinto il pc"); 
}

// ALTRIMENTI avete pareggiato
else {
    console.log("Avete pareggiato");
    
}
