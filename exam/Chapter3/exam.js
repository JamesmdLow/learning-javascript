// Chapter 3 exam

/**
 * Question 1
 * Write a function to calculate and return the area of a circle
 * r is the radius
 */

function circleArea(r) {
    // your code goes here...
function circleArea(r) {
    let area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r *r;
        return area;
    }
}

const radius = r;

let theArea = calculateArea(radius);

console.log("The area is:" + theArea);

/**
 * Question 2
 * Write a function to console.log your jame, do not return a value for the function
 */
function logYourName(name) {
    // your code goes here...
}function Name(James) {
    } console.log("Jame");


/**
 * Question 3
 * What's the difference between var, let, and const and which one should you use?
 var declarations are globally scoped or function scoped whilst let and const are block scoped.
 * What is global scope variable in javascript and why is it dangerous to use and lead to bugs?
 */ global scoped variable can be updated and re-delared within its scope which can lead to unwanted changes
causing bugs.

/**
 * Question 4
 * Write a function that takes a number
 * If the number is less than 5, print 'less than 5' in the console
 * If the number is between 6-10, print 'between 6-10'
 * Otherwise, print 'other'
 */
function ifElseStatement(name) {
    // your code goes here...

    function ifElsestatement(number) {
        if (number < 5) {
            console.log("less than 5");
        } else if (number < 10) {
            console.log("between 6-10");
        } else {
            console.log("other");
        }
    }

    ifElsestatement(4);
    ifElsestatement(7);
    ifElsestatement(12);




