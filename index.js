const people = document.getElementById("people-amount"),
  sum = document.getElementById("dollar-amount"),
  sumError = document.getElementById("sum-err"),
  pplError = document.getElementById("ppl-err"),
  buttons = document.querySelectorAll(".selector"),
  customInput = document.getElementById("custom"),
  tipResult = document.getElementById("tip-result-num"),
  peopleResult = document.getElementById("people-result-num"),
  resetButton = document.getElementById("reset-button");

const checkAmount = () => {
  if (sum.value === "0") {
    document.querySelector("h3").style.color = "red";
    sumError.style.display = "block";
    sum.style.border = "none";
    sum.style.outline = "1px solid red";
    sum.style.borderRadius = "5px";
  } else {
    document.querySelector("h3").style.color = "black";
    sumError.style.display = "none";
    sum.style.border = "none";
    sum.style.outline = "1px solid hsl(172, 67%, 45%)";
    sum.style.borderRadius = "5px";
  }

  if (people.value === "" || people.value === "0") {
    document.querySelector("#people-head").style.color = "red";
    pplError.style.display = "block";
    people.style.border = "1px solid red";
    people.style.outline = "none";
    people.style.borderRadius = "5px";
  } else {
    document.querySelector("#people-head").style.color = "#7f9c9f";
    pplError.style.display = "none";
    people.style.border = "none";
    people.style.outline = "1px solid hsl(172, 67%, 45%)";
    people.style.borderRadius = "5px";
  }
};

function totalTip(button) {
  const five = document.getElementById("5"),
    ten = document.getElementById("10"),
    fifteen = document.getElementById("15"),
    twentyFive = document.getElementById("25"),
    fifty = document.getElementById("50"),
    custom = document.getElementById("custom"),
    people = document.getElementById("people-amount").value;
  let result = 0,
    tipPerPerson = 0.0,
    totalPerPerson = 0.0;

  checkAmount();

  switch (Number(button.target.value)) {
    case 5:
      result = Number(sum.value) * (Number(five.value) / 100);
      break;
    case 10:
      result = Number(sum.value) * (Number(ten.value) / 100);
      break;
    case 15:
      result = Number(sum.value) * (Number(fifteen.value) / 100);
      break;
    case 25:
      result = Number(sum.value) * (Number(twentyFive.value) / 100);
      break;
    case 50:
      result = Number(sum.value) * (Number(fifty.value) / 100);
      break;

    default:
      result = Number(sum.value) * (Number(custom.value) / 100);
      break;
  }

  if (people === "0" || people == "") {
    alert("Please enter a valid number");
  } else {
    tipPerPerson = result / Number(people);
    totalPerPerson = tipPerPerson + Number(sum.value) / Number(people);
  }

  tipResult.innerHTML = `${tipPerPerson.toFixed(2)}`;
  peopleResult.innerHTML = `${totalPerPerson.toFixed(2)}`;

  console.log(result);
  return result;
}

function reset() {
  tipResult.innerHTML = "0.00";
  peopleResult.innerHTML = "0.00";
  people.value = null;
  sum.value = null;
  customInput.value = null;
}

buttons.forEach((element) => {
  element.addEventListener("click", totalTip);
});

customInput.addEventListener("focusout", totalTip);

resetButton.addEventListener("click", reset);
