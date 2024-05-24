let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

function updateDisplay() {
    const display = document.getElementById('displayValue');
    display.textContent = displayValue;
}

function appendNumber(number) {
    if (secondOperand === true) {
        displayValue = number;
        secondOperand = false;
    } else {
        if(displayValue === '0'){
            displayValue=number;
        }
        else{
            displayValue=displayValue+number;
        }
    }
    updateDisplay();
}

function setOperator(nextOperator) {
    const value = parseInt(displayValue);
    if (firstOperand === null) {
        firstOperand = value;
    } 
    else if (operator) {
        const result = performCalculation(operator, firstOperand, value);
        displayValue = String(result);
        firstOperand = result;
    }
    secondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function performCalculation(operator, firstOperand, secondOperand) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

function calculateResult() {
    const value = parseInt(displayValue);
    if (operator && secondOperand === false) {
        const result = performCalculation(operator, firstOperand, value);
        displayValue = String(result);
        firstOperand = result;
        operator = null;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
    updateDisplay();
}
