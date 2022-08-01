// console.log("Hello World")

// ````````````````````````
// First problem
// ````````````````````````

var mainTaka = 5000;
var apple = 220;
var orange = 300;
var quantity = 3;
// quantity += 5;
var appleWithQ = apple * quantity;

// console.log(appleWithQ);

var orangeWithQ = orange * quantity;

var totalPrice = appleWithQ + orangeWithQ;

var returnMoney = mainTaka - totalPrice;

console.log(returnMoney);

// ``````````````````````````````
// 2nd Problem
// ``````````````````````````````

var bangla = 76.55;
var english = 88;
var math = "90.23";
var math = parseInt(math);
var science = 87;
science -= 5;
var islam = 92.22;
var totalMarks = bangla + english + math + science + islam;
var subNumber = 5;
var averegeNumber = totalMarks / subNumber;
averegeNumber = averegeNumber.toFixed(2);
var averegeNumber = parseFloat(averegeNumber);
console.log(averegeNumber);

// ````````````````````````````
// 3rd Problem
// ````````````````````````````

var firstSec = "I'm going to be a";
var lastSec = "awesome Web Developer";
var fulSec = firstSec + " " + lastSec;
console.log(fulSec);

// ```````````````````
// 4th Problem 
// ```````````````````

var num = 119;
var numDevider = 10;
var reminder = num % numDevider;
console.log(reminder);