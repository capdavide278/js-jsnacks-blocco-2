/*genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni*/

const random_num=[];

while (random_num.length < 10 ) {
    
    let rando=Math.round(Math.random() * 100)+1;

    if(!random_num.includes(rando)){
        random_num.push(rando);
    }
    
}

console.log(random_num);


/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

const array=[];

/* const domanda=parseInt(prompt("Che numero vuoi inserire?")); */
let somma = 0;

while (somma < 50) {

    let domanda=parseInt(prompt("Che numero vuoi inserire?"));
    console.log(domanda);
    array.push(domanda);
    somma += domanda;

    if(somma > 50){
        alert("Stai superando il limite");
        console.log(null);
    }
}

console.log(array);