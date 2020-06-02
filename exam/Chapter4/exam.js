// Chapter 4 exam

/**
 * Question 1
 * Create an array of numbers from 0 to 10
 */let numbers= [0,1,2,3,4,5,6,7,8,9,10]


/**
 * Question 2
 * Print out the 2nd element of the array you just created
 */let scores[10,20,30,40,50,60,70,80,90,100,110]


/**
 * Question 3
 * Print out the length of the array
 */let scores = [10,20,30,40,50,60,70,80,90,100,110]


/**
 * Question 4
 * Iterate through the array and print out all the values using a for loop

 let output

 for (let i = 0; i < scores.length; i++) {
    output = "Numbers:" + i + "scores:" + scores[i];
    console.log(output);
}

/**
 * Question 5
 * Iterate through the array and print out all the values using a while loop
 * with a counter variable
 */
let output;

let i = 0;
while (i < scores.length) {
    output = "Number:" + i + "scores:" + scores [i];
    console.log(output);
    i = i +1;

/**
 * Question 6
 * Given an array of numbers, write a function that returns the highest number in the array
 */

function get_highest_number(array_of_numbers) {
    const array_of_numbers = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
    // your code goes here

    let array_of_numbers = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

    let HighestNumber = 0
    let output;
    for (let i = 0; i < array_of_numbers.length; i++) {
        output = "No:" + i + "numbers:" + array_of_numbers[i];
        if (array_of_numbers[i] > HighestNumber) {
            HighestNumber = array_of_numbers[i];
        }
    }
    console.log ("Highest Number: " + HighestNumber)




}



