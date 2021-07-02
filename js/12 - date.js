// getter

let currentDate = new Date();

let msTillNow = currentDate.getTime(); // milliseconds since January 1, 1970
let msFrom1970 = Date.now(); // milliseconds since January 1, 1970
let year = currentDate.getFullYear(); // YYYY
let month = currentDate.getMonth(); // [0, 11]
let day = currentDate.getDate(); // [1, 31]
let dayOfWeek = currentDate.getDay(); // [0, 6]
let minute = currentDate.getMinutes(); // [0, 59]
let second = currentDate.getSeconds(); // [0, 59]
let milliseconds = currentDate.getMilliseconds(); // [0, 999]

// ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// ["january", "february", "march", "april", "may", "june","july","august","september", "october", "november", "december"]
// output: Friday, 2 Jul 2021

// output: hour:minutes:seconds

// output: stopwatch

// setter

let changedDate = new Date("1992-10-11"); // ISO Date
let specifiedDate = new Date("03/25/2015"); // short date
let oldDate = new Date("25 Mar 2015"); // long date
let startDate = new Date("Mar 25 2015"); // long date
let startDateTime = new Date("2015-03-25T12:00:00Z");

let msec = Date.parse("March 21, 2012");

currentDate.setFullYear(1992); // YYYY MM DD
currentDate.setMonth(2); // [0, 11]
currentDate.setDate(3); // [1, 31]
currentDate.setHours(23); // [0, 23]
currentDate.setMinutes(36); // [0, 59]
currentDate.setSeconds(10); // [0, 59]
currentDate.setMilliseconds(798); // [0, 999]
