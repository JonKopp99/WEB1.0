const billInput = document.querySelector('#input-bill');
const tipInput = document.querySelector('#input-tip');
const peopleInput = document.querySelector('#input-people');
const displayTip = document.querySelector('#display-tip');
const displayTotal = document.querySelector('#display-total');

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipInput.value);
  const people = parseFloat(peopleInput.value);

  const tipamount = (bill * tip) / 100;
  const total = bill + tipamount;

  displayTip.innerHTML = "$" + tipamount / people;
  displayTotal.innerHTML = "$" + total / people;
}

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input',calculateTip);
