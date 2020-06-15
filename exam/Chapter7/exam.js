// Question 1 - what are the three primitive types supplied by javascript and what are they used for?
// for example, one of the primitive type is a Boolean, and it is used to evaluate whether something
// is true or false. What are the other two primitive types?

// Question 2 - What's the difference between primitive types and objects? Why can't you just
// use primitive types for everything and not use objects are all?

// Question 3 - what is the difference between NaN, undefined, and null? Read up google
// and try to understand more about it.

// Question 4 - consider the below variable x
var x;
if (!x) {
    console.log(x); // what will this print?
}
if (x === undefined) {
    console.log(x); // what will this print?
}
if (x == undefined) {
    console.log(x); // what will this print? And why does intellij say 'type coersion'. Look up google
    // to find out more about type coersion
}

// type coersion example
const age = 12;
const string_age = '12';

if (age == string_age) { // does this evaluate to true? why?
    console.log('age == string_age');
}

if (age === string_age) { // does this evaluate to true? why?
    console.log('age === string_age');
}

// Pro tip: when you use double equals,it coerces the operands if their types
// are not the same. So for example 2 == 3 is the same as 2 === 3, which both
// results to false because both operands are numbers.


// but when you do
// 12 == '12' this is True because you coerce '12' to the number 12
// when you do 12 === '12' this is False because you are checking that the TYPES are the same
// and you do not coerce values so that's why it results to False!
// This is an important lesson about == and === because that's where alot of bugs come up
// Best practice is to use === all the time, some lazy people may use == which is fine
// if you know how it works and you're experienced and you're the only person working on the code base


// Question 5 - what is null? When should you use null and when should you use undefined?
// Question 6 - what is NaN used for?
// Question 7 - complete the below function using NaN

const not_a_number = 12;

function printNumber(number) {
    // if the number is not a number then print out 'error, NaN'
    // else, print out the number
}

// Question 8 - learn more about the double equals sign, what does the following print out
console.log('\'1\' == true:', '1' == true); // if you dont know the answer right now, read the top of page 278
console.log('1 == "" :', '1' == ''); // bottom of 278

// Question 8 - now that you've learnt about double and triple equals, what does falsey and truthy mean?
// Show me some examples of truthy and falsey, for example

if ([]) { // an array
    console.log('empty array: will this print?'); // why did this print?
}
// just have a brief read through the truthy and falsey values, the most important
// lesson here is that you have an understanding of truthy and falsey, and double and triple equals
// because you will DEFINITELY encounter it when you start coding.

// here's a link to skim through briefly https://www.sitepoint.com/javascript-truthy-falsy/

// Question 9 - take out all the spaces in the below string
const some_string = '           this is a string with a lot of spacess       '
console.log(some_string) // prints out the string with alot of spaces


// hint: use the trim function, see page 294



// Question 10 - change the string to uppercase
console.log(some_string) // this prints it in lower case, change it to uppercase


// hint: use the toUpperCase() function, page 294



// Question 11 - find the index of the full stop in the below string
const email = 'james.low@gmail.com'
// uncomment the below 2 lines
// const index = your code goes here
// console.log(index)

// hint, use the indexOf() function



// Final question - Complete the below function to validate a mobile phone number that starts
// with 04 and is 10 digits long.

function validate_mobile_number(number) {
    // your code goes here
}

