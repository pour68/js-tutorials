let distance = "105";
parseInt(distance); // 105

let containerVolume = "10.5";
parseFloat(containerVolume); // 10.5

let grade = "15.75";
Number(grade); // 15.75

let distanceValue = +distance; // 105

let isNotNumber = isNaN("125"); // false

// ----------------------------------------------------------------

let bookPrice = 10.5;
bookPrice.toString(); // "10.500"

// ----------------------------------------------------------------

let isTruthyValue = Boolean("Pouria Nayeb"); // true
let isNumber = Boolean(null); // false
let isNumber = Boolean(undefined); // false
