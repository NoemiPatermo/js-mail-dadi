
//chiedi all'utente la sua mail

var userEmail = prompt("inserisci la tua mail");

//controlla che sia nella lista di chi può accedere

var emailList = ['noemi.patermo@libero.it', 'blablabla@ciao.it', 'pincopallo@ciao.it', 'ciaone@ciao.it'];

//imposto una variabile assegnandola come falsa 
var check = false;

//inizio il ciclo for, il mio contatore ha valore iniziale di zero.
//imposto la condizione per poter eseguire il codice, la condizione è vera se il contatore è minore alla lunghezza dell'array
//se è falsa si esce dal ciclo
//incremento il contatore che deve essere testato nella condizione al giro successivo 

//se il mio contatore nella lista della mail si verifica strettamente uguale alla mail dello user
// la variabile check sarà vera
for (var i = 0; i < emailList.length; i++){
    if(emailList[i] === userEmail){
        check = true;
    }
} if (check){
    document.getElementById("login").innerHTML = "Login effettuato correttamente, benvenuto!";
}else{
    document.getElementById("login").innerHTML = "Accesso negato, email non corretta. Vuoi iscriverti?";
}


//GIOCO DEI DADI
//GENERARE UN NUMERO RANDOM DA 1 A 6, SIA PER IL GIOCATORE SIA PER IL PC
//STABILIRE IL VINCITORE IN BASE A CHI FA IL PUNTEGGIO PIù ALTO

//Math.floor(Math.random()*10) + 1 mi da numero random intero da 1 a 10.
/*
var numPc = Math.floor(Math.random() * 6) + 1;
var numUser = Math.floor(Math.random() * 6) + 1;

if (numUser > numPc){ 
   document.getElementById("result").innerHTML = "The winner is...complimenti!";
}else if(numUser = numPc){
    document.getElementById("result").innerHTML = "Adesso siamo pari!";
}
else{
    document.getElementById("result").innerHTML = "Sorry...hai perso!";
}
*/