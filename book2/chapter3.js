// // const max = function(arguments) {
// //     console.log(arguments instanceof Array);
// //     let large = arguments[0];
// //     for(let i = 0; i < arguments.length; i++) { if(arguments[i] > large) {
// //         large = arguments[i]; }
// //     }
// //     return large; };
// // console.log(max(2, 1, 7, 4));
//
// // const max = function(...values) { console.log(values instanceof Array);
// //     let large = values[0];
// //     for(let i = 0; i < values.length; i++) { if(values[i] > large) {
// //         large = values[i];
// //     }
// //     }
// //     return large; };
// // console.log(max(2, 1, 7, 4));
//
//
// // const max = function(...values) {
// //     return values.reduce((large, e) => large > e ? large : e, values[0]);
// // };
// //  console.log(max())
//
// // const names1 = ['Laurel', 'Hardy', 'Todd'];
// // const names2 = ['Rock'];
// // const sayHello = function(name1, name2) { console.log('hello ' + name1 + ' and ' + name2);
// // };
// // sayHello(...names1); sayHello(...names2);
//
// const names1 = ['Tom', 'Jerry'];
// const names2 = ['Butch', 'Spike', 'Tyke'];
// console.log([...names1, 'Brooke']); console.log([...names1, ...names2]); console.log([...names2, 'Meathead', ...names1]);
//
// const computeTax = function(amount,
//                             stateTax = 15, localTax = stateTax * .10) { console.log('stateTax: ' + stateTax + ' localTax: ' + localTax);
// };
//
// computeTax(100, 10, 2);
// computeTax(100, 10);
// computeTax(100);
//
// Exercise 1
// An amountAfterTaxes() function returns the total amount after all the taxes are applied.
// Let’s implement that function so the output for each call in the next code shows up as expected.
//the function goes here.
// const amount = 25.12;
// const fedTax = 10;
// const stateTax = 2;
// const localTax = 0.5;
//
//
// const veryBadWay = function(amount, ...taxes) {
//     const arrayOfValues = [];
//
//     for (let i = 0; i < taxes.length; i++) {
//         const tax = amount * taxes[i] / 100;
//         arrayOfValues.push(tax);
//     }
//     let sum = 0;
//     for (let i = 0; i < arrayOfValues.length; i++) {
//         sum += arrayOfValues[i];
//     }

// }


// const amountAfterTaxes = function (amount, ...taxes) { // [10, 2, 0.5]
//     // for (let i = 0; i < tax.length; i++) {
//     //     amount += amount * tax[i] / 100;
//     //     console.log(`tax ${i} amount is ${amount}`)
//     // }
//     // return amount;
//     const computeTaxForAmount = function (tax) {
//         return amount * tax / 100;
//     }
//
//     const totalValues = function (a, b) {
//         return a + b;
//     }
//     return taxes.map(computeTaxForAmount)
//         .reduce(totalValues, amount).toFixed(2);
// };

// how map works
// const numbersTo10 = [1, 2, 3, 4, 5];
// const total = numbersTo10.map(i => i + 1);
//
// const addOne = function(number) {
//     return number + 1
// }
//
// const total2 = numbersTo10.map(addOne);
//
// console.log(total); // [ 2, 3, 4, 5, 6]
// console.log(total2); // [ 2, 3, 4, 5, 6]
//


//
// const allTaxes = [fedTax, stateTax, localTax];
//
// const fedTaxTotal = amount * fedTax / 100;
// const stateTaxTotal = amount * stateTax / 100;
// const localTaxTotal = amount * localTax / 100;
//
// console.log(fedTaxTotal);
// console.log(stateTaxTotal);
// console.log(localTaxTotal);
//
// const returnedValueFromMap = allTaxes.map(i => i * amount / 100);
// console.log('returnedValueFromMap', returnedValueFromMap)
//
// const returnedValue = allTaxes.forEach(i => console.log(i * amount / 100));
// console.log('returned value', returnedValue);
// console.log(amountAfterTaxes(amount)); //25.12
// console.log(amountAfterTaxes(amount, fedTax)); //27.63
// console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13
// console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); //28.26
// console.log(veryBadWay(amount, fedTax, stateTax, localTax)); //28.26

//
// const numbers = [1, 2, 3];
//
//
// // one way to do it
// const total = numbers.reduce(function (a, b) {
//     return a + b
// }, 0);
//
// // another way to do it using just a shorter way
// const total2 = numbers.reduce(
//     (a, b) => a + b, 0);
//
// const sum = function(a, b) {
//     return a + b;
// }
//
// const total3 = numbers.reduce(sum);
//
// console.log('total = ', total);
// console.log('total2 = ', total2);
// console.log('total3 = ', total3);

// Exercise 2
// The purchaseItems() function merely prints the parameters it receives, after a little formatting. Two calls to the function are shown.
// Let’s implement a third call to the function so that it produces the desired result.
//     const purchaseItems = function(essential1, essential2, ...optionals) {
//         console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
// };
// purchaseItems('bread', 'milk');
// purchaseItems('bread', 'milk', 'jelly');
// const mustHaves = ['bread', 'milk'];
// const andAlso = ['eggs', 'donuts', 'tea'];
//
// console.log(mustHaves + ',' + andAlso)

// //call purchaseItems so it prints bread, milk, eggs, donuts, tea
// Exercise 3
// Let’s reimplement the purchaseItems() function from the previous exercise so that milk and bread are assumed for the first two parameters,

//Working with Function Arguments

// respectively, if a value is not provided for the argument in that position.
const purchaseItems = function(essential1 = 'milk',
                               essential2 = 'bread', ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};
const items = ['cheese', 'milk'];
purchaseItems('cheese'); //cheese, bread,
purchaseItems(...items); //cheese, milk,
purchaseItems(); //milk, bread,


//cheese, bread, purchaseItems(...items);
// cheese, milk, purchaseItems();
// milk, bread,
// Exercise 4
// The placeOrder() function assumes values for shipping and date if those values are not given. Let’s fix the parameter list so the function behaves as expected.
    const placeOrder = function(qty,amount, shipping = amount < 20 ? 5:10, date = new Date()){
    console.log(' shipping charge for id: ' +
    qty + ' is $' + shipping + ' Date:' + date.getDate());
};
//shipping, if not given, is $5 if amount less than 20 else $10 //date is today's date unless given
placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05); placeOrder(1, 25.30);
placeOrder(1, 25.20);
// Exercise 5
// In the previous example, how can we pass the value for the date parameter without passing a value for the shipping parameter?
// Wrapping Up
// The rest parameter is a good replacement for arguments—just as powerful minus the perils. The same symbol (...)
// when used on the calling side becomes the spread operator. In addition to these two additions related to function parameters/arguments,
//JavaScript now has the ability to assign default values to parameters. This last feature especially is very useful to extend existing
//functions for adding new parameters. In the next chapter, we will look at nice ways to iterate over collections of data.