

var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperation(operationCode) {
    var numbeer1 = Number(input1.value);
    var numbeer2 = Number(input2.value);

    if (operationCode === "+") {
        console.log(numbeer1 + numbeer2);
    } else if (operationCode === "-") {
        console.log(numbeer1 - numbeer2);
    } else if (operationCode === "*") {
        console.log(numbeer1 * numbeer2);
    } else if (operationCode === "/") {
        console.log(numbeer1 / numbeer2);
    } else {
        console.log("unknown operation");
    }
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide];

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener("click", onOperationButtonClick);
}





