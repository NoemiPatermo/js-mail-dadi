/*var iscritti = ['Luca', 'Marco', 'Paolo'];
var primoIscritto = iscritti [0];
console.log('il primo iscritto è'+ primoIscritto);
var numeroIscritti = iscritti.length;
console.log('il numero di iscritti è' + numeroIscritti);
var posizioneUltimoIscritto = iscritti.length - 1;
var ultimoIscritto = iscritti[posizioneUltimoIscritto];
console.log('ultimo iscritto è ' + ultimoIscritto);
iscritti.push('pippo');
var posizioneAggiornata = iscritti.length - 1;
ultimoIscritto = iscritti[posizioneAggiornata];
console.log('ultimo iscritto è ' + ultimoIscritto);
//--------------------------------------
var registrati = ['pippo', 'pluto','maria','pippina','giovanna', 'francesca'];
var index = 0;
console.log(registrati[index]);
index++;
console.log(registrati[index]);
index++;
console.log(registrati[index]);
index++;
console.log(registrati[index]);
for (var i = 0; i < registrati.length; i++){
    //console.log(registrati[i]);
    document.getElementById('registrati-list').innerHTML += '<br/>' + registrati[i];
}
for (var i = 0; i <= 100; i++){
    console.log(i);
}*/

//chiedi all'utente la sua mail

//stampa messaggio appropriato sull'esito del controllo
var userEmail = prompt("inserisci la tua mail");
//controlla che sia nella lista di chi può accedere
var emailList = ['noemi.patermo@libero.it', 'blablabla@ciao.it', 'pincopallo@ciao.it', 'ciaone@ciao.it'];

var check = false;
//inizio il ciclo for, il mio contatore ha valore iniziale di zero.
//imposto la condizione per poter eseguire il codice, la condizione è vera se il contatore è minore alla lunghezza dell'array
//se è falsa si esce dal ciclo
//incremento il contatore che deve essere testato nella condizione al giro successivo 
for (var i = 0; i < emailList.length; i++){
    if(emailList[i] === userEmail){
        check = true;
    }
}