let sauer = 100;

//oppgave 1a
function tellEnSau(){

    sauer -= 1;

    console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
}


//oppgave 1b
function tellNoenSauer(antall){

    sauer = sauer - antall;
    console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");

}

function mistetTellingen(){

    sauer = 1000;
    console.log(sauer); 
}

tellNoenSauer(40);

mistetTellingen();

tellNoenSauer(50);