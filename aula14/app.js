// console.log("Hello word");

// var a= 'var A';
// let b ='var B';
// const c = 'const C';


// const fun = () => {
//     console.log("fun js called");
// }

// fun();
// console.log(a);
// console.log(b);
// console.log(c);
//////////////////////////////////////////////

/** variables in js */
// a = 2;
// b = 10;
// c = 0;

/** functions in js */
// const func = () => {
//     return a + b;
// }

/** arrays in js */
// let arr = [0, 10, 12, 89];

/** for loop in js */
// console.log("js for loop");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//     console.log(arr[i]);
// }
/** for each loop in js */
// console.log("js foreach loop");
// arr.forEach(element => {
//     console.log(element);
// });
/** while loop in js */
// console.log("js while loop");
// i = 0;
// while(i < len) {
//     console.log(arr[i]);
//     i++;
// }

/** functions with parameters */
// console.log("JS addNumbers function")
// const addNumbers = (a, b) => {
//     return a + b;
// }
// console.log(addNumbers(20, 40));

/** classes in JS */
// class Test {
//     #name
//     constructor(name) {
//         this.#name = name;
//     }
//     sayHello() {
//         return "Hello I'm " + this.#name;
//     }
// }
// const testClass = new Test("bruno js");
// console.log(testClass.sayHello());

import Test from "./js/Test.js";
const test = new Test("bruno js");
console.log(test.sayHello());