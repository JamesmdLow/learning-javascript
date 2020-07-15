//Chapter 2.0

// Exercise 1
// What’s the output of this code?
    function first() {
        for(let i = 0; i < 5; i++) {
            second(); }
    }
    function second() {
        for(let i = 0; i < 3; i++) {
            console.log(i); }
    }

    first();
// 0 1 2 continuity





// Exercise 2
// First modify the code in the previous exercise so it gives a runtime error due to the major issue. Then modify the code to produce a reasonably desired result.
//   function first() {
//         for( let i = 0; i < 5; i++) {
//             second(); }
//     }
//     function second() {
//         for(let i = 0; i < 3; i++) {
//             console.log(i); }
//     }
//
//     first();
//     Exercise 3
// What are the benefits of using 'use strict';? Exercise 4
// Runs the code in struct mode. Detects undeclared variables, errors due to setting read-only properties, and the use of any reserved keywords.
// Will this code result in an error?
// const fourth = '4th';
// fourth = fourth;
// console.log(fourth);

// yes ,const so property is unable to be changed
// Exercise 5
// Will this code result in an error?
    'use strict';
const person = Object.freeze(
    {name: 'John Doe', address: { street: '101 Main St.', City: 'New York' }});
person.address.street = '102 Main St.';
console.log(person);
JavaScript is a very powerful language with some unpleasant surprises. You learned to be careful about automatic insertion of ;, to use === instead of ==,
    and to declare variables before use. We also discussed a few ways to proac- tively deal with the gotchas—by using the 'use strict';
directive and lint tools. In the next chapter we will discuss how a very fundamental task of declaring variables has changed, for the better, in JavaScript.

