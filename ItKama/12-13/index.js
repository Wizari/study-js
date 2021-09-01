function firstNameLog() {
    var id = "first-name";
    var el = document.getElementById(id);
    console.log(el.value);
}

function lastNameLog() {
    console.log(document.getElementById("last-name").value);
}

function logValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}

function getEl(id) {
    return document.getElementById(id);
}

firstNameLog();

lastNameLog();

logValue("input-text3");

console.log(getValue("input-text3"));

console.log(getEl("input-text3"));










