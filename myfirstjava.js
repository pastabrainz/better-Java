console.log("Hello Javascript");

let variable1 = "String Value"
let variable2 = 10;
let variable3 = 13;
let variableBoolean = true;

console.log(variable1)
console.log(variable2 + variable3)

let myArray =[1,2,3];
let myStringArray = ('hello','world');

console.log(myArray[0]);
console.log(myStringArray);


myStringArray.toString();

function addFunction(value1,value2){

    let sum = value1 + value2;
    return sum;
}

function subtractFunction(value1,value2){

    let subtract = value1 - value2;
    return subtract;
}

function multiplyFunction(value1,value2){

    let multiply = value1 * value2;
    return multiply;
}

console.log(addFunction(3,4));

console.log(subtractFunction(3,4));

console.log(multiplyFunction(3,4))

let university = "Deakin Uni";

if (university === "Deakin Uni"){
    console,log("Thats Right")
}
else{
    console.log("LEAVE");
}