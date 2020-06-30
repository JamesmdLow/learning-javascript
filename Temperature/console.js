function calculateArea(r) {
    let area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r *r;
        return area;
    }
}

const radius = 5.2;

let theArea = calculateArea(radius);

console.log("The area is:" + theArea);

function Name(James) {
} console.log("Jame");

var x;
if (!x) {
    console.log(x); // what will this print? x
}
if (x === undefined) {
    console.log(x); // what will this print?
}
if (x == undefined) {
    console.log(x); // what will this print? And why does intellij say 'type coersion'. Look up google
    // to find out more about type coersion
    //undefined
    //Type coercion is a means to convert one data type to another.
}
