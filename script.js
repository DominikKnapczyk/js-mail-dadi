// LISTA EMAIL
var emailList = ["bob@gmail.com", "andrea@libero.it", "giovanni@gmail.com"];

// EMAIL PRESENTE NELLA LISTA?
function checkEmail() {

  var emailInput = document.getElementById("emailInput").value;
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

  var newEmailInput = document.getElementById("newEmailInput").value;
  emailList.push(newEmailInput);

  document.getElementById("addEmailForm").style.display = "none";
  output.innerHTML = "Email aggiunta alla lista consentita.";
}