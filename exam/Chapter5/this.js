// Understanding the this keyword is very important. This is what separates the newbs to the pros.
// For the following exercise, you need to open 'this.html' in the browser, instead of running node.js, I will explain why later in this exercise...

/**
 *   'This' depends on where the script is run.
 *    When you run this script in the browser, the 'this' object refers to the window object. Well what is the windows object?
 *    read this --> https://www.w3schools.com/js/js_window.asp#:~:text=The%20window%20object%20is%20supported,members%20of%20the%20window%20object.
 *    the windows object basically represents the browser's window
 */
function printInnerHeight() {
    const w = this;
    console.log(w.innerHeight); // prints the chrome windows inner height
}

printInnerHeight();

/**
 * To prove that 'this' refers to the windows object, open up this.html and look at the console tab. You should see
 * this === window is true
 */
function confirmWhatThisIs() {
    console.log('this === window is ', this === window);
}


confirmWhatThisIs(); // prints 'this === window is true'
console.log('using the new keyword', new confirmWhatThisIs()); // prints 'this === window is false'

/**
 * Ok, now that we know that 'this' refers to the windows object. Then what the hell is up with the below function
 */

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.displayName = function () {
        console.log(`Name: ${this.firstName} ${this.lastName}`); // why is it that 'this' in this function refers to the instance of Person itself?
    };
}

const p = new Person('James', 'Low');
p.displayName(); // prints Name: James Low, wtf?

/**
 * So the above example doesn't make much sense. So far we're saying that 'this' refers to the windows object meaning that it refers to google chrome.
 * But in the above function we saw that the 'this' refers to the instance of the Object. This is actually why the keyword 'this' is so confusing for many people.
 * The 'this' keyword is DIFFERENT depending on the context (i.e. how it is run).
 * So basically, if you just say 'console.log(this)' and open it up in the browser, then 'this' refers to the google chrome window because it doesn't refer to anything else.
 * If you use the keyword 'this' in a function with the 'new' keyword which instantiates an object from the function, then the 'this' refers to the newly instantiated object.
 *
 * Confused yet? If you are, do some more reading and try out some examples until you get it!
 */

// Now that you think you understand what 'this' is, can you guess what the below will print?

function foo() {
    console.log('Can you guess it right?', this === window);
    console.log(this === window);
}

const user = {
    count: 10,
    foo: foo,
    foo1: function () {
        console.log(this === window);
    },
    foo2: function() {
        console.log(this);
    }
};

// what will this print when I call foo()

user.foo(); // prints true or false?
user.foo1(); // prints true or false?
user.foo2(); // guess what this prints?


/**
 * Ok, so you think you have mastered the 'this' keyword, can you guess what the below will print?
 **
 */

const calvin = new Person('Cal', 'Pang');
calvin.displayName(); // what does this print? cal pang

const james = new Person('James', 'Md');
james.displayName(); // what does this print? james md


// ok, here comes the challenge, what does the below print?
// if you got it wrong, do some reading here https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8#:~:text=%E2%80%9Cthis%E2%80%9D%20Refers%20to%20an%20Invoker,contains%20the%20method%20being%20invoked.&text=So%20the%20value%20of%20this,a%20method%20is%20being%20invoked.

james.displayName.call(calvin); // what does this print? clavin

/**
 * Ok, now that you've read that link, hopefully you'll understand why 'this' is so confusing for most poeple.
 *
 * Let's test out your knowledge again about 'this'
 * What does the below print?
 */

const sally = new Person('Sally', 'Bustos');
sally.displayName(); // what does this print? sally bustos

const jill = new Person('Jill', 'Watson');
jill.displayName(); // what does this print? jill watson

// here comes the challenge!!!
let mystery = sally.displayName.bind(jill); // what does this print and why? if you don't undersatnd it, go back to the link and read again!

jill watson

