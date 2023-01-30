const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const hourInput = document.getElementById('hour');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const aboutInput = document.getElementById('message');

const checkName = () => {
  let valid = false;
  const name = nameInput.value.trim();
  if(!name.length){
    showError(nameInput, "Este campo es obligatorio")
  }else{
    clearError(nameInput);
    valid = true;
  }
  return valid
}

const checkDate = () => {
  let valid = false;
  const dateValue = dateInput.value.trim();
  if(!isDateValid(dateValue)){
    showError(dateInput, "No es posible seleccionar la fecha actual o anteriores")
  }else{
    clearError(dateInput);
    valid = true;
  }
  return valid
}

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();
  if(!emailValue.length){
    showError(emailInput, "Este campo es obligatorio")
  }else if(!isEmailValid(emailValue)){
    showError(emailInput, "El email ingresado no es válido")
  }else{
    clearError(emailInput);
    valid = true;
  }
  return valid
}

const checkPhone = () => {
  let valid = false;
  const phoneValue = phoneInput.value.trim();
  if(!phoneValue.length){
    showError(phoneInput, "Este campo es obligatorio")
  }else if(!isPhoneValid(phoneValue)){
    showError(phoneInput, "El número ingresado es invalido")
  }else{
    clearError(phoneInput);
    valid = true;
  }
  return valid
}

const isFormValid = () => checkName(nameInput) && checkEmail(emailInput) && checkPhone(phoneInput) && checkDate(dateInput);
