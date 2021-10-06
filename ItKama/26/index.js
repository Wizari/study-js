
function Dog(name) {
    this.myName = name;
    this.voice = function () {
        // console.log("Hey, my name is " + myName);
        console.log("Hey, my name is " + this.myName);
    };
}

var dog = new Dog("Name-name");
var dog2 = new Dog("Name-name2");

dog.voice();
dog2.voice();















