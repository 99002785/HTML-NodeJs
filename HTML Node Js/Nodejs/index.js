let fruit = "apple";

function addFruit(fname) {
    let fruit = fname;
    console.log(fruit);
}


addFruit("mango");
const data = "Welcome 123"
console.log("The old fruit is " + fruit);
console.log(data);

let array = [123, 234, 345, 4234, 5667];
for (const element of array) {
    console.log(element)
}

function addFunc(v1, v2 = 234) {
    var res = v1 + v2;
    console.log("the added value: " + res);
}

addFunc(23);


const getName = (name) => `${name}`;

console.log(getName("Somename"))

const subtract = (v1, v2) => v1 - v2;
console.log(subtract(5, 3));