// JavaScript Practice - Hoisting and Function Concepts
// This is a simple practice file written in a normal coding style.

console.log("Practice 1: variable hoisting");
var firstName;
console.log(firstName); // undefined
firstName = "Aman";
console.log(firstName);

var lastName = "Sharma";
console.log(lastName);

console.log("Practice 2: var inside function");
function showName() {
  console.log(userName); // undefined
  var userName = "Rahul";
  console.log(userName);
}
showName();

console.log("Practice 3: redeclaring var");
var age = 20;
var age = 25;
console.log(age);

console.log("Practice 4: let is not like var");
try {
  console.log(city);
} catch (error) {
  console.log("let error:", error.message);
}
let city = "Delhi";
console.log(city);

console.log("Practice 5: const also has TDZ");
try {
  console.log(country);
} catch (error) {
  console.log("const error:", error.message);
}
const country = "India";
console.log(country);

console.log("Practice 6: function declaration hoisting");
helloFromFunction();
function helloFromFunction() {
  console.log("Hello from function declaration");
}

console.log("Practice 7: function expression is not hoisted like a declaration");
try {
  greetMe();
} catch (error) {
  console.log("function expression error:", error.message);
}

var greetMe = function () {
  console.log("Hello from function expression");
};

greetMe();

console.log("Practice 8: function inside function");
function outer() {
  console.log("Before declaration:", message);

  function message() {
    return "This function is declared inside outer";
  }

  console.log(message());
}
outer();

console.log("Practice 9: var in loop");
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop value:", i);
  }, 100);
}
console.log("After loop i =", i);

console.log("Practice 10: fix var loop issue with let");
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let loop value:", j);
  }, 200);
}

console.log("Practice 11: simple function with parameters");
function add(a, b) {
  return a + b;
}
console.log(add(5, 7));
console.log(add(10, 20));

console.log("Practice 12: default parameter");
function multiply(x, y = 2) {
  return x * y;
}
console.log(multiply(4));
console.log(multiply(4, 5));

console.log("Practice 13: function declaration before variable");
var result = "before";
function resultFunction() {
  console.log("I am a function declaration");
}
console.log(typeof resultFunction);

console.log("Practice 14: nested function");
function parent() {
  child();

  function child() {
    console.log("Child function is called");
  }
}
parent();

console.log("Practice 15: call function before actual definition");
showData();
function showData() {
  console.log("This function is called before its written position");
}

console.log("Practice 16: arrow function");
const total = (a, b) => a + b;
console.log(total(9, 11));

const square = x => x * x;
console.log(square(8));

console.log("Practice 17: function expression after assignment");
const calculate = function (num) {
  return num * num;
};
console.log(calculate(6));

console.log("Practice 18: closure example");
function outerFunction() {
  var x = 10;

  function innerFunction() {
    console.log("inner x:", x);
  }

  innerFunction();
}
outerFunction();

console.log("Practice 19: shadowing with var");
var globalValue = "global";
function demoShadow() {
  var globalValue = "local";
  console.log(globalValue);
}
demoShadow();
console.log(globalValue);

console.log("Practice 20: block scope with let and const");
if (true) {
  let blockLet = "inside block";
  const blockConst = "constant value";
  console.log(blockLet);
  console.log(blockConst);
}

try {
  console.log(blockLet);
} catch (error) {
  console.log("block scope error:", error.message);
}

console.log("Practice 21: var inside block");
if (true) {
  var blockVar = "visible outside";
}
console.log(blockVar);

console.log("Practice 22: TDZ example with let");
function checkTdz() {
  console.log(value);
  let value = 100;
}

try {
  checkTdz();
} catch (error) {
  console.log(error.name + ": " + error.message);
}

console.log("Practice 23: function declaration and same scope");
function demoA() {
  console.log("demoA called");
}
demoA();
demoB();
function demoB() {
  console.log("demoB called");
}

console.log("Practice 24: function assigned to variable");
var myFunc = function () {
  console.log("Assigned function runs");
};
myFunc();

console.log("Practice 25: reassignment after hoisting");
var message = "first";
console.log(message);
message = "second";
console.log(message);

console.log("Practice 26: undeclared variable");
try {
  console.log(unknownValue);
} catch (error) {
  console.log("Error:", error.name, error.message);
}

console.log("Practice 27: practical example");
function calculateTotal(price, tax) {
  var subtotal = price + tax;
  return subtotal;
}
console.log(calculateTotal(100, 18));

console.log("Practice 28: function using var hoisting");
function showState() {
  console.log(status);
  var status = "ready";
  console.log(status);
}
showState();

console.log("Practice 29: function hoisting before assignment");
var finalResult = "Before";
function finalResultFunction() {
  console.log("Function result");
}
console.log(typeof finalResultFunction);

console.log("Practice 30: summary");
console.log("var is hoisted and initialized to undefined");
console.log("let and const are hoisted but stay in TDZ until initialized");
console.log("function declarations are hoisted completely");
console.log("function expressions are not hoisted the same way");
console.log("Use let and const for safer code");

console.log("End of JavaScript hoisting practice");
