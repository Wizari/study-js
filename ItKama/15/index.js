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

function onButtonPlusClick() {
    getNumbers();
    var result = numbeer1 + numbeer2;
    console.log(result)
}

function onButtonMinusClick() {
    getNumbers();
    var result = numbeer1 - numbeer2;
    console.log(result)
}

function onButtonMultiplyClick() {
    getNumbers();
    var result = numbeer1 * numbeer2;
    console.log(result)
}

function onButtonDivideClick() {
    getNumbers();
    var result = numbeer1 / numbeer2;
    console.log(result)
}





buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDivide.addEventListener("click", onButtonDivideClick);




