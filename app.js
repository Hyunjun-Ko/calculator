// ? work on rounding the result
const add = function (a, b) {
  number = String(Number(a) + Number(b));
  display.textContent = number.length >= 8 ? "NaN" : number;
};

const subtract = function (a, b) {
  number = String(Number(a) - Number(b));
  display.textContent = number.length >= 8 ? "NaN" : number;
};

const multiply = function (a, b) {
  number = String(Number(a) * Number(b));
  display.textContent = number.length >= 8 ? "NaN" : number;
};

const divide = function (a, b) {
  number = String(Number(a) / Number(b));
  display.textContent = number.length >= 8 ? "NaN" : number;
};

const operate = function () {
  console.log(operator);
  console.log(number1);
  console.log(number2);
  switch (operator) {
    case "+":
      add(number1, number2);
      break;
    case "-":
      subtract(number1, number2);
      break;
    case "×":
      multiply(number1, number2);
      break;
    case "÷":
      divide(number1, number2);
      break;
  }
};

let number1;
let number2;
let operator;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clr = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equals = document.querySelector(".equals");
const period = document.querySelector(".period");

clr.addEventListener("click", () => {
  display.textContent = "0";
  number1 = "";
  number2 = "";
  operator = "";
});
del.addEventListener(
  "click",
  () => (display.textContent = display.textContent.slice(0, -1))
);
period.addEventListener("click", () => {
  if (
    !display.textContent.includes(".") &&
    display.textContent &&
    display.textContent.length <= 7
  )
    display.textContent += ".";
});
equals.addEventListener("click", () => {
  number2 = display.textContent;
  operate();
  operator = "";
});
Array.from(numbers).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (display.textContent == "0") display.textContent = "";
    if (display.textContent.length <= 7) display.textContent += btn.textContent;
  });
});
Array.from(operators).forEach((btn) => {
  btn.addEventListener("click", () => {
    number2 = display.textContent;
    if (operator) {
      // * if there is an operator already, then calculate intermediate result
      // * the second operand is then what is on the display.

      operate();
      console.log(operator);
      console.log(number1);
      console.log(number2);
      // * reset
    }
    // * intermediate result or number on the display
    // * at the time of operator press should be the first operand.

    number1 = display.textContent;
    display.textContent = "";
    operator = btn.textContent;
  });
});
