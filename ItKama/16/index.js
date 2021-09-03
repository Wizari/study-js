var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDivide = document.getElementById("buttonDivide");

var number1;
var number2;

function getNumbers() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    numbeer1 = Number(input1.value);
    numbeer2 = Number(input2.value);
}

function makeOperation(operationCode) {
    getNumbers();
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


function onButtonPlusClick() {
    makeOperation("+");
}

function onButtonMinusClick() {
    makeOperation("-");
}

function onButtonMultiplyClick() {
    makeOperation("*");
}

function onButtonDivideClick() {
    makeOperation("/");
}


buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);




