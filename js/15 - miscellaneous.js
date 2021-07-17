// strict mode
"use strict";

// Hoisting

sum([1, 2, 3, 4]);

function sum(collection) {
  return collection.reduce((total, item) => total + item, 0);
}

// Math object
let floor = Math.floor(1.5); // 1
let ceil = Math.ceil(1.75); // 2
let max = Math.max(1, 10, 15, 18, 20); // 20
let min = Math.min(1, 10, 15, 18, 20); // 1
let absoluteValue = Math.abs(-15); // 15
let euler = Math.E;
let piValue = Math.PI;
let square1_2 = Math.SQRT1_2;
let sqrt_8 = Math.sqrt(25);
let round = Math.round(10.5);
let power = Math.pow(10, 2);
let truncate = Math.trunc(-12.4);
let degreeInput = (90 * Math.PI) / 180.0;
let sin_90 = Math.sin(degreeInput);
let degreeOutput = Math.asin(1);

// Random object
let random = Math.random();

// RegEx object
let statement = "W3schools is awesome language.";
const pattern = /w3schools/gi;
// const pattern = new RegExp("w3schools", "gi");
pattern.test(statement);

// RegEx: sequence of characters that forms a search pattern
// let usernames = "pour68 maryam67 hamed67 MHD-1112";

// let numbers = usernames.match(/\d+/g); // [67, 67, 67, 1112]
// let regExp = new RegExp("\\d+","g");

// /\bexpression\b/g
// /\b\d{5}\b/g
// /\b[0,9]{5}\b/g
// /\b[a-zA-Z]{5}\b/g

// exec(): if find return first match otherwise null.
// test(): if find true otherwise false.
// toString(): return string.
