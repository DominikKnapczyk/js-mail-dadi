// ESERCIZIO EMAIL -------------------------------------------------------------------------------------------------------

// LISTA EMAIL
var emailList = ["bob@gmail.com", "andrea@libero.it", "giovanni@gmail.com"];

// EMAIL PRESENTE NELLA LISTA?
function checkEmail() {

  // INPUT EMAIL
  var emailInput = document.getElementById("emailInput").value;
  // JS DISPLAY
  var output = document.getElementById("output");

  // SE EMAIL PRESENTE NELLA LISTA (CONSENTI ACCESSO) ALTRIMENTI (NEGA ACCESSO E FAI COMPARIRE IL NUOVO IMPUT PER AGGIUNGERE EMAIL)
  if (emailList.includes(emailInput)) {
    output.innerHTML = "Accesso consentito.";
  } else {
    output.innerHTML = "Accesso negato.";
    document.getElementById("addEmailForm").style.display = "block";
  }
}

// AGGIUNGU UNA NUOVA EMAIL DA INSERIRE NELLA LISTA E NASCONDI L`INPUT
function addEmail() {

  // INPUT NUOVA EMAIL
  var newEmailInput = document.getElementById("newEmailInput").value;
 
  // AGGIUNGI EMAIL ALLA LISTA
  emailList.push(newEmailInput);
  // NASCONDI INPUT DELLA NUOVA EMAIL
  document.getElementById("addEmailForm").style.display = "none";
  // DISPLAY:"email-aggiunta"
  output.innerHTML = "Email aggiunta alla lista consentita.";
}



// ESERCIZIO DADI -------------------------------------------------------------------------------------------------------

// LANCIA I DADI
function rollDice() {

  // PUNTEGGIO DEL GIOCATORE
  var playerRoll = Math.floor(Math.random() * 6) + 1;
  // PUNTEGGIO DEL COMPUTER
  var computerRoll = Math.floor(Math.random() * 6) + 1;
  // JS DISPLAY
  var output1 = document.getElementById("output1");
  
  // MOSTRA TUTTI I DADI
  output1.innerHTML = "Il tuo punteggio: " + playerRoll + "<br>" + "Il punteggio del computer: " + computerRoll + "<br>";
  
  // DETERMINA CHI HA IL PUNTEGGIO PIU` ALTO
  if (playerRoll > computerRoll) {
    output1.innerHTML += "Hai vinto!";
  } else if (playerRoll < computerRoll) {
    output1.innerHTML += "Hai perso!";
  } else {
    output1.innerHTML += "Pareggio!";
  }
}