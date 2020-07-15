// Literals and Destructuring
// enhance object
//
// // // const name1 = 'john'
// // // const name2 = 'dan'
// // // console.log(`Hello ${name1} and $name2`);
// //
// // // const createPerson = function(name, age, sport, sportFn) {
// // //     return {
// // //     name,
// // //     age,
// // //     toString() {
// // //         return `${this.name} ${this.age}`; },
// // //     [`play${sport}`] : sportFn };
// // // };
// // // const sam =
// // //     createPerson('Sam', 21, 'Soccer',
// // //         function() {
// // //         console.log(`${this.name}, kick, don't touch`); });
// // //
// // // console.log(sam.name);
// // // console.log(sam.toString());
// // // sam.playSoccer();
// //
// // const getPresidentName = function(number) { //implemented only for number 6
// //     return ['John', 'Quincy', 'Adams'];
// //
// //     const [firstName, ...otherParts] = getPresidentName(6);
//
//
// // };
// // // const president6 = getPresidentName(6); const firstName = president6[0];
// // // const lastName = president6[2];
// //
// // // const [firstName, middleName, lastName] = getPresidentName(6);
// // // const [firstName,, lastName, nickName] = getPresidentName(6);
// // // console.log(nickName);
// //
// // // const [firstName,, lastName, nickName='Old Man Eloquent'] = getPresidentName(6);
// // // console.log(nickName);
// // //
// // // const [firstName, ...otherParts] = getPresidentName(6);
// //
// // // changing two values in multiply returns
// //
// // // let [a, b] = [1, 2];
// // // console.log(`a=${a} b=${b}`); [a, b] = [b, a];
// // // console.log(`a=${a} b=${b}`);
// // //
// // //
// // // const printFirstAndLastOnly = function([first,, last]) {
// // //     console.log(`first ${first} last ${last}`);
// // //     [first,, last] = [last,, first]
// // //     console.log(`first ${first} last ${last}`);
// // //
// // // };
// // // printFirstAndLastOnly(['John', 'Q', 'Adams']);
// //
// // const weight = 'WeightKG';
// // const sam = {
// //     name: 'Sam',
// //     age: 2,
// //     height: 110,
// //     address: { street: '404 Missing St.'}, shipping: { street: '500 NoName St.'}, [weight]: 15, [Symbol.for('favoriteColor')]: 'Orange',
// // };
// //
// // const { name: firstName, age: theAge } = { name: 'Sam', age: 2, height: 110 };
// // const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;
// // const { lat, lon, favorite = true} = {lat: 84.45, lon: -114.12};
// //
// //
// // const printInfo = function(person) { console.log(`${person.name} is ${person.age} years old`);
// // };
// // printInfo(sam);
// //
// // // const printInfo = function({name: theName, age: theAge}) {
// // //     console.log(`${theName} is ${theAge} years old`);
// // //    const { name, address: { street }, shipping: { street: shipStreet } } = sam;
// //
// //     // let theName = 'dan';
// //     // ({ name: theName } = dan);
// //     //
// //     // console.log(dan);
// //
// //     // const addAge = function (person, theAge) {
// //     //     return {first: person.first, last: person.last, age: theAge};
// //     // };
// //     // const parker = {first: 'Peter', last: 'Parker'};
// //     // console.log(addAge(parker, 15));
// //
// // const addAge = function(person, theAge) {
// //     return {...person, last: person.last.toUpperCase(), age: theAge };
// // }
// // const parker = { first: 'Peter', last: 'Parker',
// //     email: 'spiderman@superheroes.example.com' }; console.log(addAge(parker, 15));
// //
// //     console.log(sam)
// //
// //
//
// // Literals and destructuring are some of the most powerful features of Java- Script, but they come with some idiosyncrasies. The following practice exer- cises will help you hone the concepts. You can find answers to these exercises on page 237.
// // Exercise 1
// // Let’s implement the greet() method, using template literals, to return the expected string result.
// // 'use strict';
// const greet = function(name, gender) {
//     return `hello, ${gender === Symbol.for('female') ? 'ms' : 'mr'} ${name}`
// }
// console.log(greet('Sara', Symbol.for('female'))); //Hello, Ms. Sara
// console.log(greet('Tom', Symbol.for('male'))); //Hello, Mr. Tom
// // Chapter 6. Literals and Destructuring • 110
// // report erratum • discuss
// // Exercise 2
// // Let’s implement a tagged template named stripMargin that removes all leading spaces and all indentations on the new lines. Also,
// // the tagged template should convert all expressions to uppercase.
// 'use strict';
// ///////????????? redo this code learn from it......
// Your code goes here
// const stripMargin = function(texts, ...expressions) {
//     const exceptLast = expressions.map(function(expression, index) {
//         return `${texts[index]}${expression.toString().toUpperCase()}`; }).join('');
//     const result = `${exceptLast}${texts[texts.length - 1]}`; return result.replace(/[\n][\t\s]+(\w)/g, ' $1').trim();
// };
//
// const name = 'Jane';
// const processed = stripMargin` This is for ${name} and it needs to be
// delivered by December 24th.`
// console.log(processed);
// //This is for JANE and it needs to be delivered by December 24th.
// // Exercise 3
// // Let’s receive the values returned by the given function in discrete variables. If a value is not returned, let’s use the value 0 instead.
// // 'use strict';
// // const beforeAndAfter = function(number) {
// //     if(number < 0) return [];
// //     if(number === 0) return [1];
// //     return [number - 1, number + 1]; }
// // let before = 0;
// // let after = 0;
// // //Your code goes here
// // = beforeAndAfter(7);
// // console.log(`${before}
// //
// // //Your code goes here
// //  = beforeAndAfter(9);
// // console.log(`${before}
// //
// // //Your code goes here
// //     = beforeAndAfter(0);
// // console.log(`${before}
// // //Your code goes here = beforeAndAfter(-1); console.log(`${before}
// // and ${after}`); //6 and 8
// // and ${after}`); //8 and 10
// // and ${after}`); //0 and 1
// // and ${after}`); //0 and 0
//
// 'use strict';
// const beforeAndAfter = function(number) {
//     if(number < 0) return [];
//     if(number === 0) return [1];
//     return [number - 1, number + 1]; }
// let before = 0;
// let after = 0;
//
// [before, after] = beforeAndAfter(7);
// console.log(`${before} and ${after}`);
//
// //Your code goes here
//
// [after, before = 0] = beforeAndAfter(9);
// console.log(`${before} and ${after}`);
// //Your code goes here
// [before, after = 0] = beforeAndAfter(0);
// console.log(`${before} and ${after}`);
// [before = 0, after = 0] = beforeAndAfter(-1);
// console.log(`${before} and ${after}`);
//
// // and ${after}`); //6 and 8
// // and ${after}`); //8 and 10
// // and ${after}`); //0 and 1
// // and ${after}`); //0 and 0
// // Wrapping Up • 111
// // report erratum • discuss
// //
// // Exercise 4
// // Let’s invoke the purchaseItems() function in a way that it prints the desired result. 'use strict';
// const purchaseItems = function(essential1, essential2, ...optionals) {
//     console.log(`${essential1}, ${essential2}, ${optionals.join(', ')}`);
// }
// const mustHaves = ['bread', 'milk'];
// const also = ['eggs', 'donuts'];
// const andAlso = ['juice', 'tea'];
// //call purchaseItems so it prints
// //bread, milk, eggs, donuts, coffee, juice, tea
// //Your code goes here
// purchaseItems(...mustHaves,...[also, 'coffee'],...andAlso)
// //Exercise 5
// //Let’s use destructuring on parameters to implement the getDetails() function. 'use strict';
// //Your code goes here
// // const details = getDetails({name: 'Sara',
// //         born: { month: 1, day: 1, year: 2000 },
// //         graduated: { month: 5, day: 31, year: 2018 }});
// // console.log(details);
// // const getDetails = function (
// // {name, born: { Year = birthYear }, graduated: {year}}) {
// // return `${name} born in the year ${birthYear}, graduated in ${year}.`;
// // };
// //
// // const details = getDetails({name: 'Sara',
// //     born: { month: 1, day: 1, year: 2000 },
// //     graduated: { month: 5, day: 31, year: 2018 }});
// // console.log(details)
// // //Sara born in the year 2000, graduated in 2018.
// get distanceTraveled() { return this.miles; }
// set distanceTraveled(value) { if(value < this.miles) {
//     throw new Error(
//         `Sorry, can't set value to less than current distance traveled.`);
// }
//     this.miles = value; }
//
// 'use strict';
// const getDetails = function(
//     {name, born: { year: birth }, graduated: {year}}) {
//     return `${name} born in the year ${birth}, graduated in ${year}.`;
// };
// const details = getDetails({name: 'Sara',
//     born: { month: 1, day: 1, year: 2000 },
//     graduated: { month: 5, day: 31, year: 2018 }});
// console.log(details);
// //Sara born in the year 2000, graduated in 2018.
//
//
// interest rate 5 years?? is this stuff discount included
// //what are the fees involved?? (annual fee) no fees regarding stuff discount
// //how much will the repaymnets change by??
// 10137995
// 10 0000 max repayment
// waving the fees
// 5 year choices package fixed with no fee charges
// how much more would we save a year??  1700
//
//
// /enhance object
//
// // // const name1 = 'john'
// // // const name2 = 'dan'
// // // console.log(`Hello ${name1} and $name2`);
// //
// // // const createPerson = function(name, age, sport, sportFn) {
// // //     return {
// // //     name,
// // //     age,
// // //     toString() {
// // //         return `${this.name} ${this.age}`; },
// // //     [`play${sport}`] : sportFn };
// // // };
// // // const sam =
// // //     createPerson('Sam', 21, 'Soccer',
// // //         function() {
// // //         console.log(`${this.name}, kick, don't touch`); });
// // //
// // // console.log(sam.name);
// // // console.log(sam.toString());
// // // sam.playSoccer();
// //
// // const getPresidentName = function(number) { //implemented only for number 6
// //     return ['John', 'Quincy', 'Adams'];
// //
// //     const [firstName, ...otherParts] = getPresidentName(6);
//
//
// // };
// // // const president6 = getPresidentName(6); const firstName = president6[0];
// // // const lastName = president6[2];
// //
// // // const [firstName, middleName, lastName] = getPresidentName(6);
// // // const [firstName,, lastName, nickName] = getPresidentName(6);
// // // console.log(nickName);
// //
// // // const [firstName,, lastName, nickName='Old Man Eloquent'] = getPresidentName(6);
// // // console.log(nickName);
// // //
// // // const [firstName, ...otherParts] = getPresidentName(6);
// //
// // // changing two values in multiply returns
// //
// // // let [a, b] = [1, 2];
// // // console.log(`a=${a} b=${b}`); [a, b] = [b, a];
// // // console.log(`a=${a} b=${b}`);
// // //
// // //
// // // const printFirstAndLastOnly = function([first,, last]) {
// // //     console.log(`first ${first} last ${last}`);
// // //     [first,, last] = [last,, first]
// // //     console.log(`first ${first} last ${last}`);
// // //
// // // };
// // // printFirstAndLastOnly(['John', 'Q', 'Adams']);
// //
// // const weight = 'WeightKG';
// // const sam = {
// //     name: 'Sam',
// //     age: 2,
// //     height: 110,
// //     address: { street: '404 Missing St.'}, shipping: { street: '500 NoName St.'}, [weight]: 15, [Symbol.for('favoriteColor')]: 'Orange',
// // };
// //
// // const { name: firstName, age: theAge } = { name: 'Sam', age: 2, height: 110 };
// // const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;
// // const { lat, lon, favorite = true} = {lat: 84.45, lon: -114.12};
// //
// //
// // const printInfo = function(person) { console.log(`${person.name} is ${person.age} years old`);
// // };
// // printInfo(sam);
// //
// // // const printInfo = function({name: theName, age: theAge}) {
// // //     console.log(`${theName} is ${theAge} years old`);
// // //    const { name, address: { street }, shipping: { street: shipStreet } } = sam;
// //
// //     // let theName = 'dan';
// //     // ({ name: theName } = dan);
// //     //
// //     // console.log(dan);
// //
// //     // const addAge = function (person, theAge) {
// //     //     return {first: person.first, last: person.last, age: theAge};
// //     // };
// //     // const parker = {first: 'Peter', last: 'Parker'};
// //     // console.log(addAge(parker, 15));
// //
// // const addAge = function(person, theAge) {
// //     return {...person, last: person.last.toUpperCase(), age: theAge };
// // }
// // const parker = { first: 'Peter', last: 'Parker',
// //     email: 'spiderman@superheroes.example.com' }; console.log(addAge(parker, 15));
// //
// //     console.log(sam)
// //
// //
//
// // Literals and destructuring are some of the most powerful features of Java- Script, but they come with some idiosyncrasies. The following practice exer- cises will help you hone the concepts. You can find answers to these exercises on page 237.
// // Exercise 1
// // Let’s implement the greet() method, using template literals, to return the expected string result.
// // 'use strict';
// const greet = function(name, gender) {
//     return `hello, ${gender === Symbol.for('female') ? 'ms' : 'mr'} ${name}`
// }
// console.log(greet('Sara', Symbol.for('female'))); //Hello, Ms. Sara
// console.log(greet('Tom', Symbol.for('male'))); //Hello, Mr. Tom
// // Chapter 6. Literals and Destructuring • 110
// // report erratum • discuss
// // Exercise 2
// // Let’s implement a tagged template named stripMargin that removes all leading spaces and all indentations on the new lines. Also,
// // the tagged template should convert all expressions to uppercase.
// 'use strict';
// ///////????????? redo this code learn from it......
// Your code goes here
// const stripMargin = function(texts, ...expressions) {
//     const exceptLast = expressions.map(function(expression, index) {
//         return `${texts[index]}${expression.toString().toUpperCase()}`; }).join('');
//     const result = `${exceptLast}${texts[texts.length - 1]}`; return result.replace(/[\n][\t\s]+(\w)/g, ' $1').trim();
// };
//
// const name = 'Jane';
// const processed = stripMargin` This is for ${name} and it needs to be
// delivered by December 24th.`
// console.log(processed);
// //This is for JANE and it needs to be delivered by December 24th.
// // Exercise 3
// // Let’s receive the values returned by the given function in discrete variables. If a value is not returned, let’s use the value 0 instead.
// // 'use strict';
// // const beforeAndAfter = function(number) {
// //     if(number < 0) return [];
// //     if(number === 0) return [1];
// //     return [number - 1, number + 1]; }
// // let before = 0;
// // let after = 0;
// // //Your code goes here
// // = beforeAndAfter(7);
// // console.log(`${before}
// //
// // //Your code goes here
// //  = beforeAndAfter(9);
// // console.log(`${before}
// //
// // //Your code goes here
// //     = beforeAndAfter(0);
// // console.log(`${before}
// // //Your code goes here = beforeAndAfter(-1); console.log(`${before}
// // and ${after}`); //6 and 8
// // and ${after}`); //8 and 10
// // and ${after}`); //0 and 1
// // and ${after}`); //0 and 0
//
// 'use strict';
// const beforeAndAfter = function(number) {
//     if(number < 0) return [];
//     if(number === 0) return [1];
//     return [number - 1, number + 1]; }
// let before = 0;
// let after = 0;
//
// [before, after] = beforeAndAfter(7);
// console.log(`${before} and ${after}`);
//
// //Your code goes here
//
// [after, before = 0] = beforeAndAfter(9);
// console.log(`${before} and ${after}`);
// //Your code goes here
// [before, after = 0] = beforeAndAfter(0);
// console.log(`${before} and ${after}`);
// [before = 0, after = 0] = beforeAndAfter(-1);
// console.log(`${before} and ${after}`);
//
// // and ${after}`); //6 and 8
// // and ${after}`); //8 and 10
// // and ${after}`); //0 and 1
// // and ${after}`); //0 and 0
// // Wrapping Up • 111
// // report erratum • discuss
// //
// // Exercise 4
// // Let’s invoke the purchaseItems() function in a way that it prints the desired result. 'use strict';
// const purchaseItems = function(essential1, essential2, ...optionals) {
//     console.log(`${essential1}, ${essential2}, ${optionals.join(', ')}`);
// }
// const mustHaves = ['bread', 'milk'];
// const also = ['eggs', 'donuts'];
// const andAlso = ['juice', 'tea'];
// //call purchaseItems so it prints
// //bread, milk, eggs, donuts, coffee, juice, tea
// //Your code goes here
// purchaseItems(...mustHaves,...[also, 'coffee'],...andAlso)
// //Exercise 5
// //Let’s use destructuring on parameters to implement the getDetails() function. 'use strict';
// //Your code goes here
// // const details = getDetails({name: 'Sara',
// //         born: { month: 1, day: 1, year: 2000 },
// //         graduated: { month: 5, day: 31, year: 2018 }});
// // console.log(details);
// // const getDetails = function (
// // {name, born: { Year = birthYear }, graduated: {year}}) {
// // return `${name} born in the year ${birthYear}, graduated in ${year}.`;
// // };
// //
// // const details = getDetails({name: 'Sara',
// //     born: { month: 1, day: 1, year: 2000 },
// //     graduated: { month: 5, day: 31, year: 2018 }});
// // console.log(details)
// // //Sara born in the year 2000, graduated in 2018.
// get distanceTraveled() { return this.miles; }
// set distanceTraveled(value) { if(value < this.miles) {
//     throw new Error(
//         `Sorry, can't set value to less than current distance traveled.`);
// }
//     this.miles = value; }
//
// 'use strict';
// const getDetails = function(
//     {name, born: { year: birth }, graduated: {year}}) {
//     return `${name} born in the year ${birth}, graduated in ${year}.`;
// };
// const details = getDetails({name: 'Sara',
//     born: { month: 1, day: 1, year: 2000 },
//     graduated: { month: 5, day: 31, year: 2018 }});
// console.log(details);
// //Sara born in the year 2000, graduated in 2018.

// Wrapping Up
// Template literals and destructuring greatly reduce the noise in code and are among the most charming features in modern JavaScript.
// Thanks to template literals, we’ll have no more clutter from multiple lines of +s to concatenate string expressions. Furthermore,
// tagged templates offer the ability to process literals to implement custom logic. Object literals reduce the ceremony around creating objects,
// and powerful destructuring makes extracting data from arrays and objects pretty darn easy. Furthermore,
// mixing destructuring with the rest operator makes the code for copying objects extensible to adding and removing properties.
















// interest rate 5 years?? is this stuff discount included
// //what are the fees involved?? (annual fee) no fees regarding stuff discount
// //how much will the repaymnets change by??
// 10137995
// 10 0000 max repayment
// waving the fees
// 5 year choices package fixed with no fee charges
// how much more would we save a year??  1700
//
//
