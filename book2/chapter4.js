//Iterators and Symbols

// what is a iterator??
//How to use Iterator in Java? 'Iterator' is an interface which belongs to collection framework.
// It allows us to traverse the collection, access the data element and remove the data elements of the collection. java.

//what is a generator??
// In simple terms, a generator is a function which returns the next value in a sequence. Unlike an iterator, it generates the next value when needed,
// rather than returning the next item of a pre-generated collection



// Exercise 1
// The code in this exercise prints every third letter, starting with the first, using the traditional for loop. Let’s convert the loop into an enhanced for loop:
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// for(let i = 0; i < letters.length; i = i + 3) { console.log(letters[i]);

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for([i,letters] of letters.entries()) {
    console.log(i + '--' + letters);
}
// Exercise 2
// Let’s complete the following code to explore the Symbol properties in an Array:
    const numbers = [1, 2, 3];
console.log("The Symbol properties in arrays are:");
console.log(Object.getOwnPropertyNames(numbers));

//     Exercise 3
// Let’s implement a method with the special name Symbol.replace to achieve the desired result in the following code:
class Message {
    constructor(text) { this.text = text; }
    [Symbol.replace] (a,b){
        return this.text.replace(a,b)
    }
}
const message = new Message('There are no stupid questions.');
console.log('stupid'.replace(message, 's*****'));
//There are no s***** questions.
console.log(''.replace(message, 'Yes, ')); //Yes, There are no stupid questions.
// Exercise 4
// Let’s create a generator function to produce a Fibonacci series not exceeding the desired value:
//Your code goes here
const fibonocciSeries = function*() { let current = 1;
    let next = 1;
    yield* [current, next];
    while(true) {
        const temp = current; current = next;
        next = next + temp;
        yield next; }
}
for(const value of fibonocciSeries()) { if(value > 25) break; process.stdout.write(value + ", ");
}
// Wrapping Up • 67
// report erratum • discuss

// Exercise 5
// In the previous exercise, we terminated the iteration when the value in the series exceeded 25. Let’s modify the fibonocciSeries()
// function so that we can terminate the series when a certain number of values has been obtained:
// //Your code goes here
//     for(const [index, value] of fibonocciSeries()) { if(index > 8) break; process.stdout.write(value + ", ");
//     }

const fibonocciSeriesS = function*() { let current = 1;
    let next = 1;
    let index = 0;
    yield *[[index++, current], [index++, next]];
    while(true) {
        const temp = current; current = next;
        next = next + temp;
        yield [index++, next]; }
}
for(const [index, value] of fibonocciSeriesS()) { if(index > 8) break; process.stdout.write(value + ", ");
}
// wrapping up
//The newly introduced Symbol primitive type is useful to define properties and methods with unique names, like [Symbol.iterator], for example.
// The enhanced for loop provides an elegant, less noisy syntax, to iterate over collections of objects. To facilitate iteration over user-defined classes,
// JavaScript supports custom iterators and generators. The generators are lazy evaluators and may be used to create infinite streams of data.
// So far we have used regular functions. In the next chapter you’ll learn about the pros and cons of arrow functions.



//redo everything you shitter
