/*
function myFunction() {
  var y = 2;
  console.log(y);
}
console.log(y);
*/

/*
function myFunction() {
  y = 2; 
  console.log(y);
}

console.log(y);
*/

var x = 1; 

function myFunction() {
  y = 2; 
  console.log(x);
}

myFunction();
console.log(y);
console.log(x);

function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  };
}

var myScope = outerFunction();
myScope;
innerScope();
myScope();

var animal = 'dog';
 
function makeZoo() {
  var animal = 'cat';
 
  console.log(`I think I'll put this ${animal} in the zoo.`);
}
 
makeZoo();
 
animal;   