//  learn about

//arrow function/multi arrow functions
//arrow function a way of shorting a function.

//Anonymous vs. Arrow Functions
//Arrow functions are anonymous and change the way this binds in functions. Arrow functions make our code more concise, and simplify function scoping and the this keyword.
// They are one-line mini functions which work much like Lambdas in other languages like C# or Python. (See also lambdas in JavaScript).
// //lexcial vs dynamic scoping
// Search Results
// Featured snippet from the web
// Lexical scope holds that the RHS reference to a in foo() will be resolved to the global variable a , which will result in value 2 being output.
// Dynamic scope, by contrast, doesn't concern itself with how and where functions and scopes are declared, but rather where they are called from.

//arrow functions
// Search Results
// Featured snippet from the web
// An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this , arguments , super , or new. target keywords.
// Arrow function expressions are ill suited as methods, and they cannot be used as constructors

// // handler
// // Event handlers can be used to handle, and verify, user input, user actions, and browser actions: Things that should be done every time a page loads.
// // Things that should be done when the page is closed. Action that should be performed when a user clicks a button.

// //contructor
// // function Person(first, last, age, eye) {
// //     this.firstName = first;
// //     this.lastName = last;
// //     this.age = age;
// //     this.eyeColor = eye;
// // }
// //
// // let myFather = new Person("John", "Doe", 50, "blue");
// // let myMother = new Person("Sally", "Rally", 48, "green");
// // console.log(myFather)
//
// //
// // const greet =
// //     (message, ...subjects) => console.log(message + ' '+ subjects.join(', '));
// // greet('Hi', 'Developers', 'Geeks');
// //
// //
// // this.stuff = 'from lexical scope'; const someValue = 4;
// // const self = this;
// // setTimeout(() => {
// //     console.log('someValue is ' + someValue); //lexical scope for someValue
// //     console.log('this...' + this.stuff);// dynamic scope for this
// //     console.log('self...' + self.stuff); //lexical scope for self
// // }, 1000);
// // //
//
// //     const create = function(message) {
// //         console.log('First argument for create: ' + arguments[0]);
// //         return () => console.log('First argument seen by greet: ' + arguments[0]);
// //     };
// //
// // const greet = create('some value');
// // greet('hi');
// // const create = function(message) {
// //     console.log('First argument for create: ' + arguments[0]);
// //     return () => console.log('First argument seen by greet: ' + arguments[0]);
// // };
// // const greet = create('some value');
// // greet('hi');
//
// // //const greet = function(message, name) { console.log(message + ' ' + name);
// // };
// // const sayHi = greet.bind(null, 'hi'); sayHi('Joe');
// // anArrowFunc.bind(null, someinput), bind()
// // const sayHi = greet.bind(null, 'hi'); sayHi('Joe');
//
// // setTimeout(function repeat(count) {
// //     console.log('called...');
// // if(count > 1)
// //     setTimeout(repeat.bind(null, count - 1), 1000); }.bind(null, 5), 1000);
// //
// //
// // const f1 = function() { if(new.target) {
// //     console.log('called as a constructor'); }
// // else {
// //     console.log('called as a function');
// // } };
// // new f1(); f1();
//
//
// // const outer = function() {
// //     return () => console.log(new.target);
// // };
// // const arrow1 = new outer();
// // const arrow2 = outer();
// // arrow1();
// // arrow2();
// //
// // let inner = new outer("John");
// // console.log(inner)
// // // const arrow = () => { console.log(new.target);
// // // }; arrow();
//
// // const primesStartingFrom = function*(start) { let index = start;
// //     while(true) {
// //         if(isPrime(index)) yield index; index++;
// //     } };
// //
// // console.log(primesStartingFrom)
//
// // const pickNamesInUpperCaseOfLength = function(names, length) {
// //     let result = '';
// //     for(let i = 0; i < names.length; i++) {
// //         if(names[i].length === length) {
// //         result += names[i].toUpperCase() + ', '; }
// //     }
// //     return result.substring(0, result.length - 2); };
//
// // same code but with functional style
//
//
//
// Exercises
// Use the following exercises to review the differences between anonymous
//For anonymous functions, this and arguments are dynamically scoped and other non-local, non-parameter variables are lexically scoped.
// For arrow functions, all non-local, non-parameter variables are lexically scoped.
// functions and arrow functions. You can find answers to these exercises on page 235.
// Exercise 1
// Does JavaScript use lexical scoping or dynamic scoping for anonymous functions? How about for arrow functions?
//
//     Exercise 2
// Refactor the following code to make it concise and to use arrow functions.
//
// 'use strict';
// const success = function(value) {
//     return { value: value };
// };
// const blowup = function(value) {throw new Error('blowing up with value ' + value);
// };
// const process = function(successFn, errorFn) {
//     const value = Math.round(Math.random() * 100, 2);
//     if(value > 50) {
//         return successFn(value);
//     } else {
//         return errorFn(value);
//     } };
// try {
//     console.log(process(success, blowup));
// } catch(ex) { console.log(ex.message);
// }
//
// const success = function(value) {
//     return { value: value };
// };

const success = value => ({ value: value });
const blowup = value => {throw new Error('blowing up with value ' + value);
};
const process = function(successFn, errorFn) {
    const value = Math.round(Math.random() * 100, 2);
    return value > 50 ? successFn(value) : errorFn (value)
    };
try {
    console.log(process(success, blowup));
} catch(ex) { console.log(ex.message);
}
//
// Exercise 3
// Make an effort to convert the following function to an arrow function:
    'use strict';
const greet = (message,...names) => { console.log(message + ' ' + names.join(', '));
};
const helloJackJill = greet.bind(null,'hello', 'Jack', 'Jill');
helloJackJill(); //hello Jack, Jill

// Exercise 4
// What’s wrong with this code? Fix it so the code produces the correct/desired result.
// 'use strict';
// const sam = {
//     name: 'Sam',
//     age: 2,
//     play: (toy) => 'I am ' + this.name + ', age ' + this.age + ' with ' + toy
// }; console.log(sam.play('ball'));

const sam = {
    name: 'Sam',
    age: 2,
    play: function (toy) {
        return 'I am ' + this.name + ', age ' + this.age + ' with ' + toy;}
};
console.log(sam.play('ball'));

// Exercise 5
// Rewrite the following imperative code to functional style.
// 'use strict';
// const numbers = [1, 5, 2, 6, 8, 3, 4, 9, 7, 6];
// let totalOfDoubleOfEven = 0;
// for(const number of numbers) {
//     if(number % 2 === 0) {
//     totalOfDoubleOfEven += number * 2;
// }
// }
// console.log(totalOfDoubleOfEven);

const numbers = [1, 5, 2, 6, 8, 3, 4, 9, 7, 6];
console.log(
    numbers.filter(e => e % 2 === 0)
        .map(e => e * 2)
        .reduce((total, e) => total + e));

// Wrapping Up
// When compared to traditional functions, arrow functions make code concise and expressive, and require less typing. However, they are not simple replacements
// for anonymous functions—significant semantic differences exist between anonymous functions and arrow functions.
// In this chapter you learned about the benefits and the limitations of arrow functions, how to create them, and when to use them.
// You also saw how arrow functions reduce noise when creating functional style code.
// In the next chapter, we’ll explore one of the most charming features of modern JavaScript—destructuring.
