function doNothing () {}

function sayHello() { // Make a function do something // 
  console.log("Hello");
}
sayHello();

function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
  console.log("Hello, Sofia");
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan");
}

sayHelloToSofia();
sayHelloToBrendan();
sayHelloToIsabel();

function doSomething(thing) {
  console.log(thing);
}

doSomething("anything");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Isabel");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function addNumber(number1, number2) {
  return number1 + number2;
}

console.log(addNumber(5, 7));

function say (greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

var x = 1;
var y = 2; 
function add (x, y) {
  return x + y;
}

function say (greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}

console.log(say("\"Hello\"", "\"Jemmifer\""));