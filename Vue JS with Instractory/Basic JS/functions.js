let x = 4;
let y = 4;
// console.log(x+y);

function add( x, y){
    return x + y;
}

console.log(add(3, 2));
console.log(add(5, 4));
console.log(add(2, 9));

function fullName( fname, lname){
    return fname + ' ' + lname;
}
console.log('Robiul', 'Hassan');
console.log('Robin', 'Hood');


// function toCelsius(farenhight){
//     return (5/9) * (farenhight - 32)
// }
// console.log(toCelsius(112));


// Arrow function

let toCelsius = farenhight => (5/9) * (farenhight - 32)
console.log(toCelsius(43));