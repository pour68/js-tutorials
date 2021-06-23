let statement = "JavaScript is an interpreting programming language.";

// transform
let statementUpperCase = statement.toUpperCase();
let statementLowerCase = statement.toLowerCase();

// search
statement.indexOf("v");
statement.lastIndexOf("a");
statement.search("a");

// checkup
statement.startsWith("JavaScript");
statement.includes("interpreting");
statement.endsWith(".");

// replace
statement.replace(/javaScript/gi, "Python");

// part of string
let javascriptWord = statement.slice();
let interpretingWord = statement.substr();
let programmingWord = statement.substring();

// slice
let words = statement.split(" ");
