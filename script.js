const billtotal = document.getElementById("billTotalInput");

const tip = document.getElementById("tipInput");

const numofpeople = document.getElementById("numberOfPeople");

const perpersontot = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numofpeople.innerText);

function calculateBill() {
  const bill = Number(billtotal.value);

  const tipPercentage = Number(tip.value) / 100;

  const tipamount = bill * tipPercentage;

  const total = bill + tipamount;

  const perpersontotal = total / numberOfPeople;

  perpersontot.innerText = `$${perpersontotal.toFixed(2)}`;
}

const increasePeople = () => {
  numberOfPeople += 1;

  numofpeople.innerText = `${numberOfPeople}`;

  calculateBill();
};

function decreasePeople() {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;

  numofpeople.innerText = `${numberOfPeople}`;

  calculateBill();
}
