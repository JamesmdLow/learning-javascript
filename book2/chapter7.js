// Working with Classes

// semantic diffrence in classes
// Instance method are methods which require an object of its class to be created before it can be called.
// Static methods are the methods in Java that can be called without creating an object of class.
// // // ...Static method means which will exist as a single copy for a class.
// // ...parameters also known as rest parameters
// //
// // // old method of creating a class
// function Car() {
//     this.turn = function(direction) {
//         console.log('...turning...'); }
// }
// //or
// function Car() {}
// Car.prototype.turn = function(direction) { console.log('...turning...'); }
// //or
// function Car() {}
// Car.turn = function(direction) {
//     console.log('...turning...'); }
// // //
// // // console.log(Car)
// //
// // // new and improved method of creating a class
// // // class Car {}
// // // console.log(Car);
// // //
// // // const createCar = function() { return new Car();
// // // };
// // // class Car {} console.log(createCar());
// //
// // // using a constructor within the class
// //
// // // class Car {} console.log(Reflect.ownKeys(Car.prototype));
// // // this class now appears to become a constructor.
// //
// // // more class constructors
// // //
// // // class Car { constructor(year) {
// // //     this.year = year; }
// // // }
// // // console.log(new Car(2018));
// //
// // // instance is creating using the new keyword, cant be called directly without new keyword
// //
// // // creating a class method
// //
// // // class Car { constructor(year) {
// // //     this.year = year;
// // //     this.miles = 0; }
// // //     drive(distance) { this.miles += distance;
// // //     }
// // // }
// // //
// // // console.log(Car)
// //
// // // have to use this. in other method of instances, without this it doesnt isolate the funtion it will look for year
// // // throughtout the lexical scope which will cause errors instead of the method instanc within the function
// //
// // //creating a computed member/ property
// // //classes/computed-members.js
// // // const NYD = `New Year's Day`;
// // //
// // // class Holidays { constructor() {
// // //     this[NYD] = 'January 1';
// // //     this["Valentine's Day"] = 'February 14'; }
// // //     ['list holidays']() {
// // //     return Object.keys(this);
// // //     }
// // // }
// // // console.log(Holidays)
// // //
// // // //classes/computed-members.js
// // // const usHolidays = new Holidays();
// // // usHolidays['4th of July'] = 'July 4';
// // //
// // // console.log(usHolidays)
// // //
// // // console.log(usHolidays[`Valentine's Day`]);
// // // const methodName = 'list holidays';
// // // console.log(usHolidays[methodName]());
// //
// // // creating properties
// //
// // // getAge() {
// // //     return new Date().getFullYear() - this.year;
// // // }
// // //
// // // const car = new Car(2007);
// // // console.log(car.getAge());
// // //
// // //
// // // get age() {
// // //     return new Date().getFullYear() - this.year;
// // // }
// // // console.log(car.age);
// // // car.age = 7;
// // get distanceTraveled() {
// //     return this.miles;
// // }
// // set distanceTraveled(value) {
// //     if(value < this.miles) {
// //     throw new Error(
// //         `Sorry, can't set value to less than current distance traveled.`);
// // }
// //     this.miles = value; }
// //
// //
// //
// // const car = new Car(2007);
// // car.drive(10);
// // console.log(car.distanceTraveled);
// // car.distanceTraveled = 14; console.log(car.distanceTraveled);
// // try {
// //     car.distanceTraveled = 1;
// // } catch(ex) { console.log(ex.message);
// // }
// // //^^ not sure the meaning of this, dive in a power up.
// //
// //
// // // defininng a class members
// //
// //
// // Car.distanceFactor = 0.01;
// //
// // static get ageFactor() { return 0.1; }
//
// // static method within the class
// // static pickBetter(carA, carB) { const computeScore = car =>
// //     car.age * Car.ageFactor + car.distanceTraveled * Car.distanceFactor;
// //     return computeScore(carA) < computeScore(carB) ? carA : carB;
// // }
// //
// // // calling method of the class
// // const car1 = new Car(2007);
// // car1.drive(150000);
// // const car2 = new Car(2010); car2.drive(175000);
// // console.log(Car.pickBetter(car1, car2));
//
// // classes/class-expressions.js
// // const createClass = function(...fields) { return class {
// //     constructor(...values) {
// //         fields.forEach((field, index) => this[field] = values[index]);
// //     } };
// // };
//
// //classes/class-expressions.js
// // const Book = createClass('title', 'subtitle', 'pages');
// // const Actor = createClass('firstName', 'lastName', 'yearStarted');
// //
// // const fisher = new Actor('Carrie', 'Fisher', 1969); console.log(fisher);
// //
// // //classes/class-expression-named.js
// // const Movie = class Show { constructor() {
// //     console.log('creating instance...');
// //     console.log(Show); }
// // };
// // console.log('Movie is the class name');
// // console.log(Movie);
// // const classic = new Movie('Gone with the Wind');
// // try { console.log('however...');
// // console.log(Show);
// // } catch(ex) { console.log(ex.message);
// // }
//
// //classes/creating-set.js
// let names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
// console.log(names.size);
// // within this array u can see that names cant be duplicated
// // lets add more the the array
// names.add('Mike');{
// console.log(names);
//
// // non functional style
// // for(const name of names) { console.log(name);
// }
//
// //functional style
//
// // names.forEach(name => console.log(name));
//
// [...names].filter(name => name.startsWith('J')) .map(name => name.toUpperCase()) .forEach(name => console.log(name));
//
// // new creation of map
// const scores =
//     new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);
// scores.set('Jake', 14);
//
// scores.forEach((score, name) => console.log(`${name} : ${score}`));
// console.log(scores.size);
//
// //weak set and weak map used in application such as vin numbers where if the car is deleted the vin get deleted, resolves memory loss.
//
// //memory/memory-usage-map.js
// const MAX = 100000000;
// const map = new WeakMap();
// for(let i = 0; i <= MAX; i++) { const key = {index: i}; map.set(key, i);
// } console.log("DONE");
//
//
// Exercise 1
// Implement a class that produces the expected result.
// 'use strict';

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.numberOfPages = pages;
        this.sales = 0;
    }
    get pages() { return this.numberOfPages; }
    get copiesSold() {
        return this.sales; }
        set copiesSold(value) {
        if(value < 0) throw new Error(`Value can't be negative`); this.sales = value;
    }
}
const book = new Book('Who Moved My Cheese?', 'Spencer Johnson', 96);
console.log(book.title); //Who Moved My Cheese console.log(book.pages); //96
try {
    book.pages = 96;
} catch(ex) {
    console.log(ex.message);
//Cannot set property pages of #<Book> which has only a getter
}
console.log(book.copiesSold); //0
book.copiesSold = 1;
console.log(book.copiesSold); //1
try {
    book.copiesSold = -2;
} catch(ex) {
    console.log(ex.message);//Value can't be negative
}
console.log(book.copiesSold); //1
// Exercise 2
// Let’s play with some static members in this exercise.
'use strict';
//Your code goes here
class Tax {
    static forAmount(amount) {
        return amount * Tax.stateRate;
    }
}
Tax.stateRate = '0.08';
console.log(Tax.stateRate); //0.08
console.log(Tax.forAmount(100)); // 8
const forAmount = Tax.forAmount;
this.stateRate = 0.01;
console.log(forAmount.call(this, 100)); //8

// Exercise 3
// We’ll use some computed properties in this exercise.

//Your code goes here

// 'use strict';
// class Todo { constructor() {
//     this['learn JavaScript'] = 'done';
//     this['write elegant code'] = 'work-in-progress';
//     this['automate tests'] = 'work-in-progress';
// }
//     get completedCount() { return Object.keys(this)
//         .filter(key => this[key] === 'done')
//         .length; }
// }
//
// const todo = new Todo();
// console.log(todo['learn JavaScript']); //'done'
// console.log(todo['write elegant code']);//'work-in-progress'
// console.log(todo['automate tests']);//'work-in-progress'
//  console.log(todo.completedCount); //1
// // Exercise 4
// Let’s use Map instead of the handcrafted Todo class.
// 'use strict';
// //Your code goes here
'use strict';
const createTodo = function() {
    const todo = new Map();
    todo.set('learn JavaScript', 'done');
    todo.set('write elegant code', 'work-in-progress');
    todo.set('automate tests', 'work-in-progress');
    return todo; };
const completedCount = function(map) {
    return [...map.values()]
    .filter(value => value === 'done')
    .length; };
const todo = createTodo(); //Returns a Map
console.log(todo.get('learn JavaScript')); //'done'
console.log(todo.get('write elegant code'));//'work-in-progress'
console.log(todo.get('automate tests'));//'work-in-progress'
console.log(completedCount(todo)); //1

// Exercise 5
// In this exercise we will create a Set and process the elements in it.
// 'use strict';
// //Your code goes here
'use strict';
const create = function(sports) {
    return new Set(sports.map(sport => sport.toUpperCase()));
};
const toLowerCase = function(sports) {
    return new Set([...sports].map(sport => sport.toLowerCase()));
};
// first function comes up with true as a default as the second is false

const sports = create(['Soccer', 'Football', 'Cricket', 'Tennis', 'soccer']);
console.log(sports)
console.log(sports.has('FOOTBALL')); //true
console.log(sports.has('Football')); //false
console.log(sports.size); //4
const inLowerCase = toLowerCase(sports);

console.log(inLowerCase.has('football'));
console.log(inLowerCase.size); //4
console.log(sports)

// Wrapping Up
// The syntax for creating classes in modern JavaScript is on par with many other languages that support the object-oriented paradigm.
// A number of traps that troubled programmers in the past have been closed with the updated syntax and behavior of classes.
// It is less noisy and less error prone to define classes, define methods and properties, and define getters and setters. In addition to creating classes,
// we can create dynamic anonymous classes using class expressions. In this chapter, after learning how to create your own

// what is a setter??
// Getters and setters are used to protect your data, particularly when creating classes. For each instance variable,
// a getter method returns its value while a setter method sets or updates its value.
// Given this,getters and setters are also known as accessors and mutators, respectively.




