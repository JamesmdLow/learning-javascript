// // //inheritance
// // class Counter {}
// // const counter1 = new Counter();
// // const counter2 = new Counter();
// // const counter1Prototype = Reflect.getPrototypeOf(counter1);
// // const counter2Prototype = Reflect.getPrototypeOf(counter2); console.log(counter1 === counter2); //false
// // console.log(counter1Prototype === counter2Prototype); //true
//
// // this class has the increment command which will add 1 to the count, closure with increment().
//
// class Counter {}
// Counter.prototype.count = 0;
// Counter.prototype.increment = function() {
//     this.count += 1; };
// // const counter1 = new Counter();
// const counter2 = new Counter();
// // console.log(counter1.count);
// // console.log(counter2.count);
// // counter1.increment();
// // counter2.increment();
// // console.log(counter1.count);
// // console.log(counter2.count);
//
// //The get method returns the value of the variable name . The set method assigns a value to the name variable.
// // The value keyword represents the value we assign to the property.
//
// // const counter1 = new Counter();
// // console.log(
// //     `Prototype has: ${Object.keys(Reflect.getPrototypeOf(counter1))}`);
// // console.log(`Before increment instance has: ${Object.keys(counter1)}`);
// // counter1.increment();
// // console.log(`After increment instance has: ${Object.keys(counter1)}`);
//
// // creating a class and using a heritance
// class Person { constructor(firstName, lastName) {
//     console.log('initializing Person fields');
//     this.firstName = firstName; // getter
//     this.lastName = lastName; // getter
// }
//     toString() {
//         return `Name: ${this.firstName} ${this.lastName}`;
//     }
//     get fullName() { return `${this.firstName} ${this.lastName}`; }
//     get surname() { return this.lastName;
// }
// }
//
// class ReputablePerson extends Person {
//     constructor(firstName, lastName, rating) {
//     console.log('creating a ReputablePerson');
//     super(firstName, lastName);
//     this.rating = rating;
// }
// }
//  //class inhertance overiding method
//
// // toString() {
// //     return `${super.toString()} Rating: ${this.rating}`;
// // }
// // get fullName() {
// //     return `Reputed ${this.surname}, ${super.fullName} `;
// // }
//
//
// const printPrototypeHierarchy = function(instance) { if(instance !== null) {
//     console.log(instance);
//     printPrototypeHierarchy(Reflect.getPrototypeOf(instance)); }
// };
//
// // deprived class overiding method
// // const alan = new ReputablePerson('Alan', 'Turing', 5);
// // console.log(alan.toString());
// // console.log(alan.fullName);
// // console.log(alan.rating)
//
//
// //print prototype hierarchy
// const alan = new ReputablePerson('Alan', 'Turing', 5);
// printPrototypeHierarchy(alan);
//
// // ReputablePerson { firstName: 'Alan', lastName: 'Turing', rating: 5 }
// // ReputablePerson {}
// // Person {}
// // {}
//
// class ComputerWiz {}
// Reflect.setPrototypeOf(Reflect.getPrototypeOf(alan),
//     ComputerWiz.prototype);
// console.log('...after change of prototype...');
// // printPrototypeHierarchy(alan);
// console.log(alan)
//
// class AwesomePerson extends Person { get fullName() {
//     return `Awesome ${super.fullName}`; }
// }
//
// const ball = new AwesomePerson('Lucille', 'Ball');
// console.log(ball.fullName);
//
// //legacy approach
// function LegacyClass(value) {
//     this.value = value;
// }
// class NewClass extends LegacyClass {}
// console.log(new NewClass(1));
//
// //managing instances types of species
// //Two Built-in Classes, Different Behaviors
// // Let’s take a look at two classes in JavaScript that implement the same method but with two different behaviors.
//
// class MyString extends String {}
// class MyArray extends Array {}
// const concString = new MyString().concat(new MyString());
// const concArray = new MyArray().concat(new MyArray());
// console.log(`instanceof MyString?: ${concString instanceof MyString}`);
// console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
//
// //Sticking to the Base Type
//
// //We’ll create a base class and a derived class and learn ways to manage the types of instances the base methods create.
// // Let’s start with a class named Names and a derived SpecializedNames class.
//
// //hardcoded
// class Names { constructor(...names) {
//     this.names = names; }
// }
// class SpecializedNames extends Names {
//     filter1(selector) {
//         return new Names(...this.names.filter(selector));
//     }
//     filter2(selector) {
//         const constructor = Reflect.getPrototypeOf(this).constructor;
//         return new constructor(...this.names.filter(selector));
//     }
//     filter3(selector) { const constructor =
//         Reflect.getPrototypeOf(this).constructor.kindHint || Reflect.getPrototypeOf(this).constructor;
//         return new constructor(...this.names.filter(selector)); }
// }
//
// const specializedNames = new SpecializedNames('Java', 'C#', 'JavaScript');
// console.log(specializedNames.filter1(name => name.startsWith('Java')));
// console.log(specializedNames.filter2(name => name.startsWith('Java')));
// console.log(specializedNames.filter3(name => name.startsWith('Java')));
//
// // kindhunt command
// class SpecializedNames extends Names { static get kindHint() {
//     return Names; }
// }
//
// //Names { names: [ 'Java', 'JavaScript' ] }
//
// // instead of using 2 x kindHint symbol.species is a way of fixing it.
class SpecializedNames extends Names { static get [Symbol.species]() {
    return Names; }
    filter3(selector) { const constructor =
        Reflect.getPrototypeOf(this).constructor[Symbol.species] || Reflect.getPrototypeOf(this).constructor;
        return new constructor(...this.names.filter(selector)); }
}

class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}
const concArray = new MyArray().concat(new MyArray());
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);

// Exercises
// These exercises will help you practice inheriting from built-in classes and to
// extend their capabilities. You can find answers to these exercises on page 241. Exercise 1
// The Set class provided in JavaScript can use some extensions. Let’s create FunctionalSet to provide filter(), map(), and reduce().
'use strict';
// //Your code goes here
const set = new FunctionalSet(['Jack', 'Jill', 'Tom', 'Jerry']);
const jSet = set.filter(name => name.startsWith('J')); const allCaps = set.map(name => name.toUpperCase());
const totalLengthOfJWords = set.filter(name => name.startsWith('J'))
    .reduce((total, word) => total + word.length, 0);
console.log(jSet); //FunctionalSet { 'Jack', 'Jill', 'Jerry' } console.log(allCaps); //FunctionalSet { 'JACK', 'JILL', 'TOM', 'JERRY' } console.log(totalLengthOfJWords); //13
Exercise 2
The add() method of Set returns the instance of Set with the added element.
    In the previous exercise we inherited from Set and our FunctionalSet provided three extra functions. However, we never called add(). Let’s change
const set = new FunctionalSet(['Jack', 'Jill', 'Tom', 'Jerry']);
to
const set = new FunctionalSet(['Jack', 'Jill', 'Tom', 'Jerry']) .add('Bill');
// What change do you have to make for your solution in Exercise 1 to work for this modified code?
//     Exercise 3
// Implement a BoundedSet that inherits from Set to provide the desired behavior shown in the code:
//     'use strict';
// //Your code goes here
// const set = new BoundedSet(5, ['Apple', 'Banana', 'Grape', 'Mangoe']);
// set.add('Orange'); set.add('Apple');
// try { set.add('Tangerine');
// } catch(ex) {
//     console.log(ex.message); //exceeded capacity of 5 elements
// }
// set.delete('Grape'); set.add('Peach'); console.log(set.size); //5
// const set2 = new BoundedSet(2, ['Apple', 'Banana', 'Grape']); console.log(set2.size); //0
// console.log(set2); //BoundedSet { capacity: 2 }
// Exercise 4
// Complete the code so it produces the desired result, using the modern Java- Script conventions:
//     'use strict';
// class Base {
// }
// copy() {
//     //Your code goes here
// } }
// class Derived1 extends Base {
//     //Your code goes here
// }
// class Derived2 extends Base {
//     //Your code goes here
// }
// const derived1 = new Derived1();
// const derived2 = new Derived2();
// console.log(derived1.copy()); //Base {} console.log(derived2.copy()); //Derived2 {}
// Exercise 5
// We will combine two classes that inherit from a class in this exercise to pro- duce the desired result:
//     'use strict';
// class SpecialWordChecker {
//     isSpecial(word) { return word !== word; }
// }
// class PalindromeChecker extends SpecialWordChecker {
//     //Your code goes here
// }
// class AlphabeticalChecker extends SpecialWordChecker {
//     //Your code goes here
// }
// const checkIfSpecial = function(specialWordChecker, word) {
//     const result = specialWordChecker.isSpecial(word) ? 'is' : 'is not'; console.log(`${word} ${result} special`);
// };
// const palindromeChecker = new PalindromeChecker();
// checkIfSpecial(palindromeChecker, 'mom'); //mom is special
// checkIfSpecial(palindromeChecker, 'abe'); //abe is not special
// const alphabeticalChecker = new AlphabeticalChecker();
// checkIfSpecial(alphabeticalChecker, 'mom'); //mom is not special
// checkIfSpecial(alphabeticalChecker, 'abe'); //abe is special
// //Combine PalindromeChecker and AlphabeticalChecker here
// const alphabeticalAndPalindromeChecker = //Your code goes here
//     checkIfSpecial(alphabeticalAndPalindromeChecker, 'mom'); //mom is special
// checkIfSpecial(alphabeticalAndPalindromeChecker, 'abe'); //abe is special



//wrapping up
//JavaScript supports object-oriented programming, but unlike most of the other mainstream languages,
// it offers prototypal inheritance instead of class- based inheritance. The updated syntax for inheritance is similar to the one in Java,
// but the semantics remain true to the roots of JavaScript. It is much easier now to use inheritance and to override methods.
// The code is easier to understand and to maintain, and it is not prone to errors as it was in the past. Furthermore,
// you can directly and comfortably use inheritance instead of relying on libraries to do it for you. In addition to supporting inheritance,
// JavaScript provides a special symbol, species, that can be used to control the type of instance that’s created when working with inheritance.