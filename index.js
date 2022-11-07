const people = document.getElementById("people-amount");
const sum = document.getElementById("dollar-amount");
const sumError = document.getElementById("sum-err");
const pplError = document.getElementById("ppl-err");
const buttons = document.querySelectorAll(".selector");
const tipResult = document.getElementById("tip-result-num");

const checkAmount = () => {
  if (Number(sum.value) === 0) {
    sum.style.borderColor = "red";
    sumError.style.visibility = "visible";
  }
  if (Number(people.value) === 0) {
    people.style.borderColor = "red";
    pplError.style.visibility = "visible";
  }
};

function calculate(button) {
  const five = document.getElementById("5");
  const ten = document.getElementById("10");
  const fifteen = document.getElementById("15");
  const twentyFive = document.getElementById("25");
  const fifty = document.getElementById("50");

  let result = 0;
  checkAmount;
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
      break;
  }

  tipResult.innerHTML = `${result.toFixed(2)}`;
  console.log(result);
  return result;
}

buttons.forEach((element) => {
  element.addEventListener("click", calculate);
});
