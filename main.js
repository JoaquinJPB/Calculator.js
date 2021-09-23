const displayPreviousValue = document.getElementById('pre-value');
const displayActualValue = document.getElementById('actual-value');

const numbersButton = document.querySelectorAll('.number');
const operatorsButton = document.querySelectorAll('.operator');

const calculator = new Calculator();

console.log(calculator.sum(2,3));
console.log(calculator.subtract(5,3));
console.log(calculator.multiply(2,3));
console.log(calculator.divide(10,2));