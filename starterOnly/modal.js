function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
"Vous devez choisir une option."
"Vous devez vérifier que vous acceptez les termes et conditions."
"Vous devez entrer votre date de naissance."*/
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgconfirm = document.querySelector(".bgroundconfirm");
const modalBtn = document.querySelectorAll(".modal-btn");
const btnSubmit = document.querySelector(".btn-submit");
const btnClose = document.querySelector(".btn-close");
const closemodal = document.querySelector(".close");
const formData=document.querySelectorAll('.formData');
console.log(formData);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
modalbg.style.display = "block";}
// close modal 1 & 2
closemodal.addEventListener("click", ()=> modalbg.style.display = "none");
btnClose.addEventListener("click", ()=>modalbgconfirm.style.display = "none");
// launch modal Submit event
btnSubmit.addEventListener('click', launchModalconfirm);
function launchModalconfirm() {
modalbgconfirm.style.display = "block";
//modalbg.style.display = "none"; 
}
//verifier input firstname
  function validateFirstname() {
  const first = document.getElementById('first').value;
  console.log(first === "" || first.length < 2);
  if (first === "" || first.length < 2) {
  console.log("Veuillez entrer au minimum deux lettres");
  formData[0].setAttribute("data-error-visible", true);
  formData[0].setAttribute("data-error", "Veuillez entrer au minimum deux lettres !");  
  return false; // Empêche l'envoi du formulaire
    }
  else{
  formData[0].setAttribute("data-error-visible", false);
  formData[0].removeAttribute(
  "data-error","Veuillez entrer au minimum deux lettres !");
 }
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées*/
}
  const validateLastname=()=>{
  const last = document.getElementById('last').value;
  console.log(last === "" || last.length < 2);
  if (last === "" || last.length < 2) {
  console.log("Veuillez entrer au minimum deux lettres");
  formData[1].setAttribute("data-error-visible", true);
  formData[1].setAttribute("data-error", "Veuillez entrer au minimum deux lettres !");
   return false; // Empêche l'envoi du formulaire
  }
else{
  formData[1].setAttribute("data-error-visible", false);
  formData[1].removeAttribute(
  "data-error","Veuillez entrer au minimum deux lettres !");

}
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées*/
}
//validate email
const validateEmail=()=>{
  const email = document.getElementById('email').value;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  console.log(email);
  console.log(!email.match(emailRegex));
 
  if (!emailRegex.test(email)) {
    console.log("Veuillez entrer un email valide");
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide !");
    return false; // Empêche l'envoi du formulaire
  } else {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error", "Veuillez entrer un email valide !");
  }
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées
}

function validate(e) {
  e.preventDefault();
  console.log(validateFirstname() && validateLastname() && validateEmail());
  if (validateFirstname() && validateLastname() && validateEmail()) {
   // Affichez le modal de confirmation
   launchModalconfirm(); 
 
  }
}




