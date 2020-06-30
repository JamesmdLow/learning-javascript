// Exercises
// //Take a break and practice, using these code exercises, to identify some potential errors in code and ways to improve writing JavaScript. You can find answers to these exercises on page 229.
// Exercise 1
// What will be the result of each of the following return statements?
// return
// 2 * 3; undwdinws
//
// return 2
// * 3; 6
//
// return 2 * 3
// ; 6
// Exercise 2
// Is it better to use == or === in the following comparison? "2.0" / 2 * "2.0" == 2 / 2 * 2;
// ==
// Exercise 3
// Write a function named canVote() that takes age as a parameter and returns a string, as shown in the following example calls to the function:
//     console.log(canVote(12)); console.log(canVote("12")); console.log(canVote(17)); console.log(canVote('@18'));
//     console.log(canVote(18)); console.log(canVote(28));
const canVote = function (age) {
    if (age === 18) {
        return'start voting'; }
    if (age > 18) {
        return 'please vote';}
        return 'not aloud to vote';
};
console.log(canVote(12)); console.log(canVote("12")); console.log(canVote(17)); console.log(canVote('@18'));
console.log(canVote(18)); console.log(canVote(28));


// //no, can't vote
// //no, can't vote
// //no, can't vote
// //no, can't vote
// //yay, start voting
// //please vote
// Wrapping Up • 13
// report erratum • discuss


// Exercise 4
// What is the output of the following code?
'use strict';

const isPrime = function(n) {
    for(i = 2; i < n ; i++) {
        if(n % i === 0)
            return false;
    }
    return n > 1; }

const sumOfPrimes = function(n) {
    let sum = 0;
    for(i = 1; i <= n; i++) {
        if(isPrime(i))
           return sum += i;
    }
    return sum; }

console.log(sumOfPrimes(10));
// Fix the errors in code to get the desired result.
//     Exercise 5
// The code in this exercise is intended to determine if a given number is a perfect
// 5
// number.
//     Eyeball the following code to detect the errors and jot them down. Then run ESLint on the code to display the errors. Compare with what you jotted down to see if you caught them all. Then fix the errors until ESLint is quiet.
//     gotchas/is-perfect.js
// var isPerfect = function(number) {
//  var sumOfFactors = 0;
//     for(index = 1; index <= number; index++) { if(number % index == 0) {
//         sumOfFactors += index;
//     }
//     }
//     return sumOfFactors == number * 2;
// };
// for(i = 1; i <= 10; i++) {
//     console.log('is ' + i + ' perfect?: ' + isPerfect(i));
// }

let isPerfect = function(number) {
     let sumOfFactors = 0;

    for(index = 1; index <= number; index++) {
    if(number % index === 0) {
        sumOfFactors += index;
    }
    }
    return sumOfFactors == number * 2;
};
for(i = 1; i <= 10; i++) {
    console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}