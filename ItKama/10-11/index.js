// console.log(document.getElementById("cities").value)
// console.log(document.getElementById("hobbies").id)
// console.log(document.getElementById("spaceMarines").src)
// console.log(document.getElementById("spaceMarines").alt)
// console.log(document.getElementById("spaceMarines-wrapper"))

var spaceMarWrapper = document.getElementById("spaceMarines-wrapper");
// spaceMarWrapper.innerHTML = "<ul><li>1</li><li>2</li></ul>"
// document.getElementById("spaceMarines-wrapper").innerHTML = "<ul><li>3</li><li>4</li></ul>"

function inputLog() {
    console.log(document.getElementById("input-text1"));
    // debugger  // точка остановки
    console.log(document.getElementById("input-text2"));
    console.log(document.getElementById("input-text3"));
}

function alertValues(elementParameters) {
    console.log(elementParameters.innerHTML);
    console.log(elementParameters.id);
    console.log("alertValues")
}


inputLog();

alertValues(spaceMarWrapper);
