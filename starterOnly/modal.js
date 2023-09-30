const editNav = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
*/
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const btnSubmit = document.querySelector(".btn-submit");
const closebtn1 = document.querySelector(".close");
const formData=document.querySelectorAll('.formData');
const form=document.getElementById('form')
//console.log(form);
//console.log(formData);
// launch modal event
const launchModal =(e)=>{
  e.preventDefault()
  modalbg.style.display = "block"
  //resetForm()  
}
/*const closebtn=document.querySelector('.btn-close')
closebtn.addEventListener('click', closeModal)*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// close modal 1 
const closeModal= (e) => {
  e.preventDefault()
  modalbg.style.display = "none"
}
closebtn1.addEventListener("click", closeModal)
function resetForm() {
  // Réinitialisez les champs du formulaire ici
  form.reset();
  formData.forEach((data) => {
    data.removeAttribute('data-error');
    data.removeAttribute('data-error-visible');
  });}
  
  const modal2 = () => {
    const modalparent = document.querySelector('.modal-body');
    const confirmationmsg = document.createElement('p');
    const closebtn = document.createElement('button');
    confirmationmsg.textContent = "Merci pour votre inscription";
    confirmationmsg.classList.add('flexp');
    modalparent.appendChild(confirmationmsg);
    closebtn.textContent = "Fermer";
    closebtn.classList.add("btn-close", "bouton");
    closebtn.setAttribute("type", "button");
    closebtn.setAttribute("id", "closeConfirmationModal");
  
    // Ajoutez un gestionnaire d'événements au bouton de fermeture
    closebtn.addEventListener("click", () => {
      // Rafraîchissez la page
       // Reload the page after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      window.location.reload();
    }, 1000); // 3000 milliseconds (3 seconds)

    });
  
    confirmationmsg.appendChild(closebtn);
  }


// launch modal Submit event
/*btnSubmit.addEventListener('click', launchModalconfirm);*/
/*function launchModalconfirm() {
modalbgconfirm.style.display = "block";
modalbg.style.display = "none"; 
}*/
//verifier input firstname
  first.addEventListener("input", ()=>validateFirstname())
  const validateFirstname=()=> {
  const first = document.getElementById('first').value;
  const lettersOnlyRegex = /^[A-Za-z]+$/; // Regex to match letters only

  if (!lettersOnlyRegex.test(first) || first.length < 2) {
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
  last.addEventListener("input", ()=>validateLastname())
  const validateLastname=()=>{
  const last = document.getElementById('last').value;
  const lettersOnlyRegex = /^[A-Za-z]+$/; // Regex to match letters only

  if (!lettersOnlyRegex.test(last) || last.length < 2) {
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
email.addEventListener('input', ()=>validateEmail()) 
const validateEmail=()=>{
  const email = document.getElementById('email').value;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide !");
    return false; // Empêche l'envoi du formulaire
  } else {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error", "Veuillez entrer un email valide !");
  }
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées
}
//validate birthdate
birthdate.addEventListener('input',()=> validateBirthdate());
const validateBirthdate=()=> {
  const birthdate=document.getElementById('birthdate');
  const birthdateValue = birthdate.value;
 // const birthdateRegex = /^(\d{2})\/(\d{2})\/(\d{2})$/;
  if (birthdateValue==="") {
    formData[3].setAttribute('data-error-visible', true);
    formData[3].setAttribute('data-error', 'Veuillez entrer une date de naissance !');
    return false;
  }
  // Convertissez la valeur de la date de naissance en objet Date
  const birthdateDate = new Date(birthdateValue);
  // Obtenez la date courante
  const currentDate = new Date();
  // Calculez l'âge en années
  const ageInMilliseconds = currentDate - birthdateDate;
  const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)); // Utilisation d'une approximation pour les années bissextiles
  // Vérifiez si l'âge est inférieur à 18
  if (ageInYears < 18) {
    // Affichez un message d'erreur
    formData[3].setAttribute('data-error-visible', true);
    formData[3].setAttribute('data-error', 'Vous devez avoir au moins 18 ans !');
    return false;
  } else {
    // Effacez le message d'erreur s'il était affiché précédemment
    formData[3].setAttribute('data-error-visible', false);
    formData[3].removeAttribute('data-error');
  }

  return true;
}
//validate quantity
quantity.addEventListener("input", ()=>validateQuantity())
const validateQuantity =()=>{
  const quantity = document.getElementById('quantity');
  //let quantityValue=quantity.value
  //isNaN(quantityValue)&& verifier si il est un nombre
  if( isNaN(quantity.value) || quantity.value==="" ){ 
    formData[4].setAttribute('data-error-visible', true)
    formData[4].setAttribute('data-error', "veuillez entrer un nombre de 0 à 99 !" )
    return false;
  }
 else if( quantity.value>99 ||  quantity.value<0 ){ 
    formData[4].setAttribute('data-error-visible', true)
    formData[4].setAttribute('data-error', "veuillez entrer un nombre de 0 à 99 !" )
    return false;
  }
  else
{
    formData[4].setAttribute("data-error-visible", false)
    formData[4].removeAttribute('data-error', "veuillez entrer un nombre de 0 à 99 !")
  }
  return true
}
//validate checkLocation
const locations = document.getElementsByName("location");
const validateLocation = () => {
  let isAnyChecked = false;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      isAnyChecked = true;
      break; // Exit the loop as soon as one radio button is checked
    }
  }
  if (!isAnyChecked) {
    formData[5].setAttribute('data-error-visible', true);
    formData[5].setAttribute('data-error', "Veuillez choisir une option !");
    return false;}
   else {
    formData[5].setAttribute("data-error-visible", false);
    formData[5].removeAttribute('data-error');
    return true;
  }
}
for (let i = 0; i < locations.length; i++) {
  locations[i].addEventListener("change", validateLocation);
}

//validate checkCondition
checkbox1.addEventListener('input', ()=> validateCondition())
const validateCondition=()=>{
  const checkbox1=document.getElementById('checkbox1');
if(!(checkbox1.checked)){
  formData[6].setAttribute('data-error-visible', true)
  formData[6].setAttribute('data-error', "veuillez cocher cette case !" )
  return false;
}
else
{
    formData[6].setAttribute("data-error-visible", false)
    formData[6].removeAttribute('data-error')
  }
  return true
}

function validate(e) {
  e.preventDefault();
  const isFirstNameValid = validateFirstname();
  const isLastNameValid = validateLastname();
  const isEmailValid = validateEmail();
  const isBirthdateValid = validateBirthdate();
  const isQuantityValid = validateQuantity();
  const isConditionValid = validateCondition();
  const isLocationValid = validateLocation(); 

  if ( isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isConditionValid
    && isLocationValid) {
   // Affichez le modal de confirmation
   // supprime le formulaire
   form.remove()
   modal2(e)
  }
  else {
    launchModal(e) 
  }
}




