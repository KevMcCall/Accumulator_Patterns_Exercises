// //Change me to ES6 syntax

// //1
// let shoppingDone = false;
// let childAllowance= 0;

// let shopping= (shoppingDone === true) ? childAllowance= 10 : childAllowance = 5;

// if (shoppingDone === true) {
//   let childsAllowance = 10;
// } else {
//   let childsAllowance = 5;
// }


// //2 

// const time= new Date().toLocaleString();
// let str = 'Hello';
// let name= "April";
// document.write('${str} ${name} it is currently ${time}'); 


// //3

// function sample (a){
//   return( a + 100);
  
// }
  
// //function with parameters
// // ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };

// // ES6
// //  🌺
// // take argument => evaluate the expression
// const multiplyES5= (x, y);

// function sum(a, b) {
//   return a + b;
// }



//find and fix erros in programming languages
//referenceError - syntax, variable declaration, missing in an object
// typeError - logical, incomplete, scope, cannot read/recognize

//Debug ME//

//  person;  //No variable declaration // Reference Error

// let data = {}; // No key-value pairs defined, empty object
// data.displayInfo();

// let data = {};
// data.displayInfo.foo = "bar"; //foo is undefined, doesn't belong to anything

// function data(){
//     let thing = "foo";
// }
// // Scoping issue problem
// data();
// thing;

// // Assignment operator wrong <
// for(let i=0; i > 5; i++){
//     console.log(i);
// }

// function addIfEven(num){
//     if(num % 2 = 0){
//         return num + 5;
//     }
//     return num;
// }

// //Comma after 5
// function loopToFive(){
//     for(let i=0, i < 5, i++){
//         console.log(i);
//     }
// }

// function displayEvenNumbers(){
//     let numbers = [1,2,3,4,5,6,7,8];
//     let evenNumbers = [];
//     for(let i=0; i<numbers.length-1; i++;){
//         if(numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers();