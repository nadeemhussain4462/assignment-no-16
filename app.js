
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function clearScreen() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    updateScreen();
}

function toggleSign() {
    if (currentInput) {
        currentInput = String(-parseFloat(currentInput));
        updateScreen();
    }
}

function percentage() {
    if (currentInput) {
        currentInput = String(parseFloat(currentInput) / 100);
        updateScreen();
    }
}

function setOperator(op) {
    if (currentInput) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            calculate();
        }
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    if (firstOperand !== null && currentInput) {
        let secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '×':
                result = firstOperand * secondOperand;
                break;
            case '÷':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        currentInput = String(result);
        operator = '';
        firstOperand = null;
        updateScreen();
    }
}

function updateScreen() {
    const screen = document.getElementById('screen');
    screen.innerText = currentInput || '0';
}