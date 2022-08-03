/* 
    1. Javascript is scripting or programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with HTML and CSS

    2. The web browser loads a web page, parses the HTML, creates what is known as a Document Object Model (DOM) from the contents. The DOM presents a live view of the web page to your Javascript code. 
    The brower will then grab everything linked to the HTML, like images and CSS files.

    3. Variable means anything that can vary. in JavaScript, a variable stores the data value that can be changed later on. Use the reserved keyword var to declare a variable in JavaScript.

    4. Always declare a JavaScriopt variable with var, let, or const. The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015.
*/

// 5. how update a variable value

var changeValue = 3;

changeValue = 6;

// console.log(changeValue);
    
/* 
    6. In JavaScript there are 5 different type of variable String, number, boolean, object, function.
*/

/* 
    7. In JavaScript there are 2 different kind of data type 
        primitive data type & non primitive data type
        1. primitive data type ...there are different kind of primitive data type .. string, number, boolean, undefined, symbol, null
        2. non primitive data type ... in JavaScript object is the non primitive data type. 
*/

/* 
    8. Variable naming convention
        1. space are not allowed in variable names.
        2. Only letters, digits, underscore, and dollar signs are permitted in variable names.
        3. Case matters when it comes to variable name.
        4. A letter (alphabet), an underscore(_), or a dollor sign ($) must be the first character in a variable name, any other special characters must not be taken.
        4. Certain terms such as reserved words in JavaScript shouldn't used to name variables.
*/


    // 9. operator short hand

var operShortHand = 65;

operShortHand += 3; //opershortHand = operShortHand + 3

operShortHand -= 5; //operShortHand = operShortHand -5

operShortHand *= 2; //operShortHand = operShortHand * 2

operShortHand /= 2; //operShortHand = operShortHand /2

// console.log(operShortHand)

// 10 ++, --

var plusOne = 5;

plusOne++; 

plusOne--;

// console.log(plusOne);

// 11. parseFloat, parseInt, toFixed

var firstNum = 7.3412;
var lastNum = 2.2342;

var divition = firstNum / lastNum;

// console.log(divition);

var fixNum = divition.toFixed(2);
var convertToFloat = parseFloat(fixNum)
// console.log(convertToFloat)

// 12. 

var arrayLength = [23, 24, 35, 13, 32, 55, 22, 11];
// console.log(arrayLength.length)

// console.log(arrayLength.indexOf(32))

// console.log(arrayLength[3])

// arrayLength[4] = "Tahdi Islam";

// console.log(arrayLength)

// var arrayItem = arrayLength.push(4343) 

// var arrayItem = arrayLength.pop();

// var arrayItem = arrayLength.shift()

// var arrayItem = arrayLength.unshift(343)
// console.log(arrayLength)

// problem 24
/* 
var myMoney = 50000;

if (myMoney >= 80000){
    console.log("I will buy a mackbook")
} else if (myMoney >= 60000){
    console.log("I will Buy a gaming Laptop")
} else if (myMoney >= 40000) {
    console.log("I will buy a lenovo yoga")
} else if (myMoney >= 20000) {
    console.log("I will buy a second hand laptop")
} else{
  console.log('I will happy with my phone')
}
/*
var funLoop = 'আসকে আমার মন ভালো নেই ' ;
for (var i = 1; i < 40; i++){
  console.log(funLoop);
}
/*
var learnItems = ['html', 'css', 'bootstrap', 'tailwind', 'Javascript'];
for (var i = 0; i < learnItems.length; i++){
  var learnItem = learnItems[i];
  console.log(learnItem);
}
*/
/* 
var i = 58;
while (i <= 98){
  console.log(i)
  i++;
}
*/
/* 
for(i=412; i<=456; i += 2){
  console.log(i)
}
*/
/* 
for(i=581;i<=623;i+=2){
  console.log(i)
}
*/
/*
var mobileModels = ['Nokia', 'Walton', 'Samsung','Realme', 'Huawei', 'Oneplus'];
var num = 0;
while(num < mobileModels.length){
  var mobileModel = mobileModels[num]
  console.log(mobileModel);
  num++
}
*/