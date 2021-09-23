const displayPreviousValue = document.getElementById('pre-value');
const displayActualValue = document.getElementById('actual-value');

const numbersButton = document.querySelectorAll('.number');
const operatorsButton = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue,displayActualValue);

numbersButton.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML))
})
