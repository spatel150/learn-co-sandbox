/* function myFunction() {
  y = 2;
  console.log(y);
}
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