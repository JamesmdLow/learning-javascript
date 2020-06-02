// Chapter 5 exam

/**
 * Question 1
 * Create an object with properties of an id, firstname and lastname
 */ let People = {
    firstname: "James"
    lastname: "low"
};




/**
 * Question 2
 * Print out the firstname of the object you just created
 */let People = {
    firstname: "James"
};


/**
 * Question 3
 * Change the firstname to 'Superman' and print out the firstname again
 let People = {
    firstname: "superman"
    lastname: "low"
};

/**
 * Question 4
 * What's a primitive type in javascript and list out all of the primitive types
 */ Represents actual value of variable
Number, String, boolean, null, symbol, undefined


/**
 * Question 5
 * Write a function that takes the object you created in question 1, if the firstname
 * is 'Superman' and print out 'Superman flies!' otherwise print out 'No superman today!'
 */
let hero = {
    firstname: "superman",
    lastname: "low"
};

function character(person) {
    if (person.firstname = "superman") {
        return true;
    } else {
        return false;
    }
}

let Random = character(hero)
if (Random) {
    console.log("superman flies")
} else {
    console.log("No superman today")
}

/**
 * Question 6
 * Edit the object in question 1 to add a property called isAwesome and set to false
 */ let hero = {
    firstname: "superman",
    lastname: "low",
    isAwesome: false
};


/**
 * Question 7
 * Edit the object in question 1 and add a property called sayHello which is a function
 * that prints out 'hello'
 */
let hero = {
    firstname: "superman",
    lastname: "low",
    isAwesome: false,
    sayHello: true,

    Hello: function () {
        this.sayHello = true;
    },

    Nodeal: function () {
        this.sayHello = false;
    },

    DoIt: function () {
        if (this.sayHello) {
            alert("Hello");
        } else {
            alert("Finethen");
        }
    }
};

/**
 * Question 8
 * What makes a noob javascript programmer and a seasoned one is knowing the
 * 'this' keyword. Spend the time to understand the 'this' keyword on google
 *instead of accidentally using a var/let/const from other objects which may confuse javascript this is used to isolate the property.
 *  Consider the below example
 */
function bike() {
    console.log(this.name)
}










