const modeBtn = document.querySelector(".mode-btn");
const cardsContainer = document.querySelector('.cards-container');
const form = document.getElementById('form');

let turns =JSON.parse(localStorage.getItem('turns')) || [];

const saveLocalStorage = () => {
  localStorage.setItem('turns', JSON.stringify(turns))
};

const toggleMode = () => {
  document.body.classList.toggle("dark");
  modeBtn.classList.toggle("active");
};

const saveData = () => {
  turns = [
    ...turns,
    {
      id: turns.length +1,
      name: nameInput.value,
      date: formatDate(dateInput.value),
      hour: hourInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      quantity: getRadioChecked(radioInputs).toLowerCase(),
      extras: getCheckedOptions(checkboxInputs),
      about: aboutInput.value,
    }
  ]
};

const renderTurn = (turn) => {
  const {name, date, hour, email, phone, quantity, extras} = turn;
  return`
    <div class="card">
      <div class="card-title">
        <h2>${name}</h2>
        <div class="contact">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target='_blank'>
          <i class="fa-solid fa-envelope"></i> 
          </a>
          <a href="https://api.whatsapp.com/send?phone=${phone}&text=Buen%20dia" target='_blank'>
          <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
      <div class="card-details">
        <h4>Cantidad: ${quantity}</h4>
        <p>Requisitos: ${extras}</p>
      </div>
      <div class="card-time">
        <div>${hour} hs</div>
        <div>${date}</div>
      </div>
    </div>
  `
}

const renderTurnsList = () => {
  cardsContainer.innerHTML = turns.map((turn) => renderTurn(turn)).join('');
};

const submitForm = (e) => {
  e.preventDefault();
  if(isFormValid()){
    saveData();
    console.log(turns);
    form.reset();
    saveLocalStorage();
    renderTurnsList();
    setDate();
  }
};

const init = () => {
  modeBtn.addEventListener("click", toggleMode);
  window.addEventListener('DOMContentLoaded', setDate);
  form.addEventListener('submit', submitForm);
}

init();