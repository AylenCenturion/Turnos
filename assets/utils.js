let date = new Date();

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const today = () => {
  let day = date.getDate();
  let month = date.getMonth() +1;
  let year = date.getFullYear();
  return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`
}

const setDate = () => {
  dateInput.value = today();
  dateInput.min = today();
  dateInput.max = date.getFullYear() +1 + '-12-31';
}

const isEmailValid = (email) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return re.test(email)
}

const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone)
}

const isDateValid = (date) => {
  const today = new Date();
  const turnDate = new Date(date);
  turnDate.setDate(turnDate.getDate())
  return today < turnDate
}

const getRadioChecked = (inputs) => {
  const checkedInput = [...inputs].find((input) => input.checked);
  return checkedInput.value
}

const getCheckedOptions = (inputs) => {
  const checkedOptions = [...inputs].filter(input => input.checked).map(opt => opt.value);
  return checkedOptions
}

const formatDate = (date) => {
  const splitDate = date.split('-').reverse().join('/');
  return splitDate
}

const showError = (input, message) => {
  const formField = input.parentElement;
  input.classList.add("input-error");
  const placeError = formField.querySelector("span");
  placeError.classList.add("place-error");
  const textError = formField.querySelector("small");
  textError.textContent = message;
}

const clearError = (input) => {
  const formField = input.parentElement;
  input.classList.remove("input-error");
  const placeError = formField.querySelector("span");
  placeError.classList.remove("place-error");
  const textError = formField.querySelector("small");
  textError.textContent = "";
}
