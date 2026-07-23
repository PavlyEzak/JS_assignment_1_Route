//Q_1
// let x = "123"
// x= Number(x)
// console.log(x+7); /// 130
/// OR
// let str = "123"
// let num= Number(str);
// console.log(num);
// console.log( typeof(num));

//======================================

//Q_2
// let x = 0 
// if (!x) {
//     console.log("invalid");
    
// }
///OR
// let check = (value)=>{
//     if(!value){ console.log("invalid");
//     }
// }
// check(0);

//======================================
//Q_3 

// for (let i = 1; i <10; i++) {
//     if (i%2 === 0) {
//         continue;
        
//     }
//             console.log(i);
// }
//OR (without continue)
// for (let i = 1; i <= 10; i++){
//     if (i%2===1) {
//         console.log(i);
        
//     }
// }

//======================================
// Q_4
// const numbers=[1,2,3,4,5]
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

//======================================
// Q_5

const merge = (arr1,arr2)=>{
    //return[...arr1,...arr2];
    //OR
    //console.log([...arr1,...arr2]);
    
}
// merge([1,2,3],[4,5,6])
//OR
// console.log( merge([1,2,3],[4,5,6]));

//======================================
// Q_6
// const day = 2
// switch (day) {
//     case 1:
//         console.log("Sunday");
        
//         break;
//     case 2:
//         console.log("Monday");
        
//         break;
//             case 3:
//         console.log("Tuesday");
        
//         break; 
//             case 4:
//         console.log("Wednsday");
        
//         break; 
//             case 5:
//         console.log("Thursday");
        
//         break; 
//             case 6:
//         console.log("Friday");
        
//         break; 
//             case 7:
//         console.log("Saturday");   

//     default:
//         console.log("Invalid");
        
//         break;
// }

//OR 
// function getDayOfWeek(day) {
//   switch (day) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Invalid ";
//   }
// }
// console.log(getDayOfWeek(2));

//======================================
// Q_7
// const strings = ["a", "ab", "abc"];
// const lengths = strings.map(str => str.length);
// console.log(lengths);


//======================================
// Q_8

// const x = 15;
// if (x%5 === 0 && x%3===0) {
//     console.log("Divisible by both");
// }
// else
//     console.log("not divisible");
    
//======================================
// Q_9
// const square = num => num * num;
// console.log(square(5));
//OR
// const square = (num)=>{
// console.log(num*num);
// }
// square(5);
//======================================
// Q_10
// const person = {
//   name: "John",
//   age: 25
// };
// function getPersonInfo({ name, age }) {
//   return `${name} is ${age} years old.`;
// }
// console.log(getPersonInfo(person));
//======================================
// Q_11
// function sum(...numbers) {
// return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
//======================================
// Q_12
// function getSuccessMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }

// getSuccessMessage().then(message => {
//   console.log(message);
// });
//======================================
// Q_13
// function findLargest(arr) {
//   return Math.max(...arr);
// }

// const numbers = [1, 3, 7, 2, 4];

// console.log(findLargest(numbers));
//======================================
// Q_14
// function getObjectKeys(obj) {
//   return Object.keys(obj);
// }

// const person = {
//   name: "John",
//   age: 30
// };

// console.log(getObjectKeys(person));
//======================================
// Q_15
// function splitWords(str) {
//   return str.split(" ");
// }

// const text = "The quick brown fox";

// console.log(splitWords(text));
//========================================================================


//ESSAY Questions 
// Q_1 

// forEach() and for...of are both used to loop through elements, but they work differently. forEach() is an array method that runs a callback function for each item and is useful when you only need to perform an action on every element. However, it cannot use break or continue and does not handle asynchronous operations well.

// for...of is a loop that works with iterable objects like arrays and strings. It provides more control because it allows break, continue, and await. Use forEach() for simple array operations and for...of when you need more control over the loop
//========================================================================
// Q_2
// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code runs. Function declarations can be used before they are written, while variables declared with var are hoisted with an initial value of undefined.

// Example: console.log(x);
// var x = 5; // Output: undefined

// The Temporal Dead Zone (TDZ) is the period where variables declared with let and const exist but cannot be accessed before their declaration. Accessing them during this time causes a ReferenceError.

// Example:

// console.log(age);
// let age = 20; // Error

//========================================================================
// Q_3
// The main difference is how they compare values. The == operator performs type conversion before comparing, which means different data types can be considered equal.

// Example: 5 == "5" // true

// The === operator compares both the value and the data type without conversion.

// Example: 5 === "5" // false

// In general, === is preferred because it avoids unexpected results caused by automatic type conversion.
//========================================================================
// Q_4
// try-catch is a JavaScript error-handling mechanism that allows developers to handle errors without stopping program execution. Code that may cause an error is placed inside the try block, and the catch block handles the error.

// Example:

// try {
//   // risky code
// } catch (error) {
//   // handle error
// }

// It is important in asynchronous operations because requests, promises, and API calls can fail. Using try-catch with async/await helps catch errors, prevent crashes, and provide better user experiences

//========================================================================
// Q_5
// Type conversion and coercion both change data types, but the difference is how the change happens. Type conversion is an explicit change made by the developer using methods like Number(), String(), or Boolean().

// Example: Number("100"); // 100

// Type coercion is an automatic conversion performed by JavaScript during operations.

// Example:  "5" + 2;      // "52"

// JavaScript converts the number 2 into a string automatically. Type conversion is intentional, while coercion happens automatically