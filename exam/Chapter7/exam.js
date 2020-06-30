// Question 1 - what are the three primitive types supplied by javascript and what are they used for?
// for example, one of the primitive type is a Boolean, and it is used to evaluate whether something
// is true or false. What are the other two primitive types?
// boolean - A Boolean value is one with two choices: true or false, yes or no, 1 or 0. In Java, there is a variable type for Boolean values: boolean user = true; So instead of typing int or double or string, you just type boolean (with a lower case "b").
// numbers - The Number() function converts the object argument to a number that represents the object's value. If the value cannot be converted to a legal number, NaN is returned.
// strings - A string can be any text inside double or single quotes.

// Question 2 - What's the difference between primitive types and objects? Why can't you just
// use primitive types for everything and not use objects are all?


// Primitives are passed by value, i.e. a copy of the primitive itself is passed. Whereas for objects, the copy of the reference is passed, not the object itself. Primitives are independent data types, i.e. there does not exist a hierarchy/super class for them. Whereas every Object is descendent of class "Object"


// Question 3 - what is the difference between NaN, undefined, and null? Read up google
// and try to understand more about it.
//Nan represents a "Not-a-Number" value.
//undefined property indicates that the variable has not been assigned a value, or not declared at all.
// null represents the intentional absence of any object value

// Question 4 - consider the below variable x

// todo

var x;
if (!x) {
    console.log(x); // what will this print? undefined
}
if (x === undefined) {
    console.log(x); // what will this print? undefined
}
if (x == undefined) {
    console.log(x); // what will this print? And why does intellij say 'type coersion'. Look up google
    // to find out more about type coersion
    //undefined
    //Type coercion is a means to convert one data type to another.
}

// type coersion example
const age = 12;
const string_age = '12';

if (age == string_age) { // does this evaluate to true? why? false, same type of string but different value
    console.log('age == string_age');
}

if (age === string_age) { // does this evaluate to true? why? false, === only same type and value
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
//Null - something that doesnt exist.
//Undefined is used to describe variables that do not point to a reference.
//Only use null if you explicitly want to denote the value of a variable as having "no value".

// todo: so what is null then?

// Question 6 - what is NaN used for?
//The NaN property indicates that a value is not a legitimate number.
// Question 7 - complete the below function using NaN


function printNumber(number) {
    if (isNaN(number)) {
        console.log(`${number} is NaN`);
    } else {
        console.log(`${number} is a number`);
    }
}

printNumber('hello')
printNumber(-1)
printNumber(2)

// if the number is not a number then print out 'error, NaN'
// else, print out the number


// Question 8 - learn more about the double equals sign, what does the following print out
console.log('\'1\' == true:', '1' == true); // if you dont know the answer right now, read the top of page 278 true
console.log('1 == "" :', '1' == ''); // bottom of 278 false

// Question 8 - now that you've learnt about double and triple equals, what does falsey and truthy mean?
// Show me some examples of truthy and falsey, for example
//     undefined is falsey.
//     null is falsey.
//     0 is falsey.
//     The empty string is falsey. NaN is falsey.
//
//     everything else is considered truthy such as 1 etc

if ([]) { // an array
    console.log('empty array: will this print?'); // why did this print? TRUE - It's not undefined, null, zero, “” or NaN.
}
// just have a brief read through the truthy and falsey values, the most important
// lesson here is that you have an understanding of truthy and falsey, and double and triple equals
// because you will DEFINITELY encounter it when you start coding.

// here's a link to skim through briefly https://www.sitepoint.com/javascript-truthy-falsy/

// Question 9 - take out all the spaces in the below string
const some_string = '           this is a string with a lot of spacess       '
console.log(some_string) // prints out the string with alot of spaces
const string_trimmed = some_string.trim();
console.log('string_trimmed: ', string_trimmed);


// hint: use the trim function, see page 294


// Question 10 - change the string to uppercase
string_uppercase = some_string.toUpperCase();
console.log('string uppercase', string_uppercase);

// hint: use the toUpperCase() function, page 294


// Question 11 - find the index of the full stop in the below string
const email = 'james.low@gmail.com';

for (let i = 0; i < email.length; i++) {
    if (email.charAt(i) === ".") {
        console.log("There's an . sign at index " + i);
    }
}
// hint, use the indexOf() function


// Final question - Complete the below function to validate a mobile phone number that starts
// with 04 and is 10 digits long.

// requirement, is to strip out all spaces
// check that the length is 10, starts with 04 and that it is a number then return true, otherwise false
function validate(phoneNumber) {
    // you still have spaces here, so the length will check for spaces so if you had 0413 400 321 then that length is 12 not 10

    const cleaned = phoneNumber.replace(/\s/g, '');
    console.log(cleaned);

    if (cleaned.substring(0,2) === cleaned.substring('04') || (isNaN(cleaned.charAt('Cleaned'))) || (cleaned.length !== 10)) {
        return false;
    }
    return true;
}


m1 = '0413 4003 33'
m2 = '0413400333'


console.log(validate(m1)); // true
console.log(validate(m2)); // true

const b = m1.substring(1, 3)
console.log(m1);


