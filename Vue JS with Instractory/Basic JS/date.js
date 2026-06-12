const date = new Date()
console.log(date); // Long Format
console.log(date.toString()); // Short Format 
console.log(date.toDateString()); // Time Short Format
console.log(date.toTimeString()); // UTC
console.log(date.toISOString()); //ISO


let getYear = date.getFullYear();
let getMonth = date.getMonth();
let getDate = date.getDate();
let getDay = date.getDay();

console.log(getYear)
console.log(getMonth)
console.log(getDate)
console.log(getDay)

let getHour = date.getHours();
let getMin = date.getMinutes();
let getSecond = date.getSeconds();

console.log(getHour);
console.log(getMin);
console.log(getSecond);