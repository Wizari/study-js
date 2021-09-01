function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = "error-input";
}

function addErrorClassToAllInputs() {
    addErrorClass("first-name");
    addErrorClass("last-name");
    addErrorClass("address");
}

// addErrorClass("last-name");
// addErrorClassToAllInputs();
// window.setTimeout(addErrorClassToAllInputs, 2000);
// sendButton.addEventListener("click", addErrorClassToAllInputs);

var sendButton = document.getElementById("send-button");
// без обертки - (addErrorClassToLastName) класс со скобками () ссразу используется
sendButton.addEventListener("click", addErrorClassToLastName);

function addErrorClassToLastName() {
    addErrorClass("last-name")
}

function onFirstNameKeyup() {
    addErrorClass("first-name");
}
var firstName = document.getElementById("first-name");
firstName.addEventListener("keyup", onFirstNameKeyup);













