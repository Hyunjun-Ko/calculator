let number1; // First operand
let number2; // Second operand
let operator;
let reset = false; // reset display flag; for mutiple operations

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clr = document.querySelector(".clear");
const del = document.querySelector(".delete");
const period = document.querySelector(".period");
const equals = document.querySelector(".equals");

// ? work on adding keyboard support?

// displays number to the screen
Array.from(numbers).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (display.textContent == "0" || reset) {
      display.textContent = "";
      reset = false;
    }
    if (display.textContent.length <= 7) display.textContent += btn.textContent;
  });
});

Array.from(operators).forEach((btn) => {
  btn.addEventListener("click", () => {
    // if there is an operator already, that means multiple operations
    // should perform calculation on the first operand and the number on the current display
    if (operator) {
      number2 = display.textContent;
      operate();
      operator = "";
    }

    number1 = display.textContent;
    reset = true;
    operator = btn.textContent;
  });
});

clr.addEventListener("click", () => {
  // reset everything
  display.textContent = "0";
  number1 = "";
  number2 = "";
  operator = "";
});

// remove the last character
del.addEventListener(
  "click",
  () => (display.textContent = display.textContent.slice(0, -1))
);

// logic for adding a period to make fractions
period.addEventListener("click", () => {
  if (
    !display.textContent.includes(".") &&
    display.textContent &&
    display.textContent.length <= 7
  )
    display.textContent += ".";
});

// evaluate
equals.addEventListener("click", () => {
  number2 = display.textContent;
  operate();
  operator = "";
});

const add = function (a, b) {
  number = String(Number(a) + Number(b));
  display.textContent = number.length >= 8 ? number.substring(0, 8) : number;
};

const subtract = function (a, b) {
  number = String(Number(a) - Number(b));
  display.textContent = number.length >= 8 ? number.substring(0, 8) : number;
};

const multiply = function (a, b) {
  number = String(Number(a) * Number(b));
  display.textContent = number.length >= 8 ? number.substring(0, 8) : number;
};

const divide = function (a, b) {
  number = String(Number(a) / Number(b));
  display.textContent = number.length >= 8 ? number.substring(0, 8) : number;
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
