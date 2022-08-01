// console.log(3434)

var fruits = ['Apple', 'Banana', 'Orange'];

var rmLast = fruits.push("kodu");

console.log(fruits);
console.log(rmLast);

var addItem = fruits.pop();

console.log(fruits);

console.log(addItem);

console.log(fruits.shift());

console.log(fruits);

// ```````````````````
// 2nd Problem 
// ```````````````````

var myScore = 85;

var tomScore = 66;

var janeScore = 95;

var peterjScore = 56;

var johnScore = 39;

var score = johnScore;

if (score >= 80){
    console.log("Your grade is 'A'");
}
else if(score >= 60){
    console.log("your grade is 'B'");
}
else if(score >= 50){
    console.log("Your Grade is 'C'");
}
else if (score >= 40){
    console.log("Your Grade is 'D'");
}
else{
    console.log("your Grade is 'F'")
}

// `````````````````````
// 3rd problem
// `````````````````````

var firstNum = 13;
var secondNum = 34;
var thirdNum = 0;

if (firstNum > secondNum && firstNum > thirdNum){
    console.log(firstNum, "is the big number")
} else if (secondNum > firstNum && secondNum > thirdNum){
    console.log(secondNum, "is the big number")
} else if (thirdNum > firstNum && thirdNum > secondNum){
    console.log(thirdNum, "is the big number")
}

// `````````````
// 4th Problem
// `````````````

var firstArm = 9;
var secondArm = 8;
var thirdArm = 7;

if ((firstArm == secondArm && firstArm !== thirdArm) || (firstArm == thirdArm && firstArm !== secondArm)){
    console.log("You can make a isosceles triangle");
} else{
    console.log("You can't make a isosceles triangle");
}