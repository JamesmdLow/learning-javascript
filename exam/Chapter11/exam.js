// Question 1: What is the difference between function declarations and function expressons? When would you use one or the other?
// Question 2: What does it mean by 'functions are first class citizens'? See page 442 and google for examples

// Question 2: Write code to illustrate three examples of:
// a) Assign functions to variables.
// b) Pass functions to functions.
// c) Return functions from functions.

// Question 3: Complete the code in test function so that if the passenger's name starts with A then return true.
// If it works, then calling processPassengers(passengers, testFunction) should print out all the names that start with 'A'

function testFunction(obj) {
    // your code goes here
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            console.log(`${passengers[i].name} starts with A`);
        }
    }
}

const passengers = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Andy' },
    { id: 3, name: 'Atter' },
    { id: 4, name: 'Boris' },
    { id: 5, name: 'Borat' },
];

processPassengers(passengers, testFunction);
// if you're correct, it should print:
// Apple starts with A
// Andy starts with A
// Atter starts with A


// Question 4: Sort the following array using a function

const numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(a, b) {
    // your code goes here
}

numbersArray.sort(compareNumbers);

// verify your result by printing out the sorted array
console.log(`the sorted array is ${numbersArray}`);

// if you're correct, it should print
// the sorted array is 50,54,54,58,60,62

// Question 5: Complete the function below to sort by sold

const products = [
    { name: 'Grapefruit', calories: 170, color: 'red', sold: 8200 },
    { name: 'Orange', calories: 160, color: 'orange', sold: 12101 },
    { name: 'Cola', calories: 210, color: 'caramel', sold: 25412 },
    { name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922 },
    { name: 'Lemon', calories: 200, color: 'clear', sold: 14983 },
    { name: 'Raspberry', calories: 180, color: 'pink', sold: 9427 },
    { name: 'Root Beer', calories: 200, color: 'caramel', sold: 9909 },
    { name: 'Water', calories: 0, color: 'clear', sold: 62123 }];

function compareSold(a, b) {
    // your code goes here
}

products.sort(compareSold);
console.log(products);

// if you are correct, it should print
// [
//   { name: 'Grapefruit', calories: 170, color: 'red', sold: 8200 },
//   { name: 'Raspberry', calories: 180, color: 'pink', sold: 9427 },
//   { name: 'Root Beer', calories: 200, color: 'caramel', sold: 9909 },
//   { name: 'Orange', calories: 160, color: 'orange', sold: 12101 },
//   { name: 'Lemon', calories: 200, color: 'clear', sold: 14983 },
//   { name: 'Cola', calories: 210, color: 'caramel', sold: 25412 },
//   { name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922 },
//   { name: 'Water', calories: 0, color: 'clear', sold: 62123 }
// ]

// Question 6: What is an anonymous function and why should you use it and when?


// Question 7: Write a function that prints 'hey james' after 2 seconds.
// hint: use setTimeout


// Question 8: Write a function that prints 'hey james' EVERY 2 seconds.


// Question 9: Nested functions have access to the outer functions SCOPE. Consider the following:

function outer() {
    const outer_number = 1314;

    return function () {
        console.log(outer_number); // prints 1314
    };
}

// can you figure out how to call the function outer to print 1314?
// hint: calling outer() returns a function, you need to call that returned function


// Question 10: What is a closure? This is a make or break interview questions so make sure you REALLY
// do understand it

// Question 11: Testing your closure knowledge
// consider the below function, why is it that when you call add() three times, it increments the
// counter by 1 instead of resetting it to zero?

const add = function () {
    let counter = 0;
    return function () {
        counter += 1;
        console.log(`the counter is now ${counter}`);
        return counter;
    };
}();

add(); //  the counter is now 1
add(); //  the counter is now 2
add(); //  the counter is now 3

// if you are having trouble understanding this, read this explanation from https://www.w3schools.com/js/js_function_closures.asp
// Example Explained
// The variable add is assigned the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.


// now consider the same method but changed slightly


const add2 = function () {
    let counter = 0;
    return function () {
        counter += 1;
        console.log(`the counter is now ${counter}`);
        return counter;
    };
}; // removed the () here

add2()(); //  the counter is now 1
add2()(); //  the counter is now 1
add2()(); //  the counter is now 1

// with your understanding of closures, does it make sense that the counter is always 1?


// Question 12: Consider the below function that uses a global counter and a function that increments
// the counter by 1 each time it's called

let count = 0;

function counter() {
    count = count + 1;
    return count;
}

console.log(`count is now: ${counter()}`); // count is now: 1
console.log(`count is now: ${counter()}`); // count is now: 2
console.log(`count is now: ${counter()}`); // count is now: 3

// your task is to implement the same functionality with a closure

function makeClosureCounter() {
    // complete the code
}

const closureCounter = makeClosureCounter();
console.log(`closure counter is now: ${closureCounter()}`); // count is now: 1
console.log(`closure counter is now: ${closureCounter()}`); // count is now: 2
console.log(`closure counter is now: ${closureCounter()}`); // count is now: 3

// hint: see page 499 for help