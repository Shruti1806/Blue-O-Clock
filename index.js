// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write");

/* 2. JavaScript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("this is an error");
console.assert(4 == (6 - 2));*/

// 3. JavaScript Variables
// What are Variables? -Containers to store date values
/*var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);
  
// 4. DATA TYPES IN JAVASCRIPT 
// Number
var num1 = 455;
var num2 = 56.76;
// console.log(num1, num2);

// String (can be written in double quotes or also can be written in single quote)
var str1 = "This is a string";
var str2 = 'This is also a string';
// console.log(str1, str2); 

// Object (key values pairs)
var marks = {
    ravi: 34,
    harry: 97,
    manav: 99.997
}
// console.log (marks);

// Booleans
var a = true;
var b = false;
// console.log(a,b);

// Undefined
var und = undefined;
// console.log(undefined);
// console.log(und); 
// then also undifined will be printed
// if we write "var und;" and then print then also the value will be undifined 

// Null
var n =null;
// console.log(n);
 
// Array
var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[4]);
// here in array the counting starts from 0

// 5. OPERATORS IN JAVASCRIPT
// Arithmetic Operators
var a = 100;
var b = 50;
//console.log("The value of a + b is ",a+b);
//console.log("The value of a - b is ",a-b);
//console.log("The value of a * b is ",a*b);
//console.log("The value of a / b is ",a/b);

// Assignment Operators
var c = b;
//c += 10;
//c -= 10;
//c *= 10;
//c /= 10;
//console.log(c);

//Comparision Operators
var x = 34;
var y = 54;
//console.log(x == y);
//console.log(x >= y);
//console.log(x <= y);

//Logical Operators

// Logical and
//console.log(true && true);
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

// Logical or
//console.log(true || true);
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);

//Logical not
//console.log(!false);
//console.log(!true);

// 6. FUNCTIONS IN JAVASCRIPT
function avg(a,b){
    return (a+b)/2;
}

c1=avg(4,6);
c2=avg(14,16);
//console.log(c1,c2);

// 7. CONDITIONALS IN JAVASCRIPT
var age = 19;
if (8<= age >= 18){
    //console.log('you are not a kid');
}
else {
    //console.log('you are a kid');
} 
*/
// 8.LOOPS IN JAVASCRIPT
// For loop
/*var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i = 0;i<arr.length;i++){
    console.log(arr[i])
}*/
// ForEach
//arr.forEach(function(element){
    //console.log(element);
//})
// While
//const ac=0;
//ac= ac+1;
//let j=0;
//while(j<arr.length){
//   console.log(arr[j]);
//   j++;  
//}

/*do{
   console.log(arr[j]);
   j++;
}while(j<arr.length);*/

// 9. BREAK AND CONTINUE STATEMENT
//var arr = [1,2,3,4,5,6,7];
//console.log(arr);
/*for(var i = 0;i<arr.length;i++){
    if(i==2){
        break;
    }
    console.log(arr[i])
}*/
/*for(var i = 0;i<arr.length;i++){
    if(i==2){
       continue;
    }
    console.log(arr[i])
}*/

// 10. ARRAY METHODS
//let myArr = ["Fan","Camera",34,null,true];
// Array Methods
//console.log(myArr.length);
//myArr.pop();
//myArr.push("shruti");
//myArr.shift();
//myArr.unshift("shruti");
//console.log(myArr.unshift("shruti"));
//const newLen = myArr.unshift("shruti")
//console.log(newLen);
//myArr.toString()
//myArr.sort()
//d.sort()
//console.log(myArr);

// 11. STRING METHODS IN JAVASCRIPT
//let myLovelyString = "Shruti is a good good girl"
//console.log(myLovelyString.length);
//console.log(myLovelyString.indexOf("is"));
//console.log(myLovelyString.lastIndexOf("good"));
//console.log(myLovelyString.slice(0,3));
//console.log(myLovelyString.replace("good","very"));
//d = myLovelyString.replace("good","very");
//console.log(d , myLovelyString);

// 12. DATES IN JAVASCRIPT
//let myDate = new Date();
//console.log(myDate.getTime());//1680454708942
//console.log(myDate.getFullYear());//2023
//console.log(myDate.getDay());//0
//console.log(myDate.getMinutes());//28
//console.log(myDate.getHours());//22

// 13. DOM (DOCUMENT OBJECT MODLE) MANIPULATION
// document
// document.location
//  document.getElementById('click').click()//(clicks on click button)
// document.getElementById('click').style.border = 'blue'(makes the border blue)
// document.getElementById('click').style.border = '2px solid blue'(changes colour with broad border and [2px solid blue]is css)
//[IN SHORT WE CAN SAY THAT WE CAN CHANGE PAGE CSS USING JAVASCRIPT]
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "yellow";

