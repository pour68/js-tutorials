let statement = "JavaScript is an interpreting programming language.";

/* props */
let statementCharactersCount = statement.length;

/* methods */

// transform
let statementUpperCase = statement.toUpperCase();
let statementLowerCase = statement.toLowerCase();

// search
statement.indexOf("v");
statement.lastIndexOf("a");
statement.search(/a/gi); // regex supported

// checkup
statement.startsWith("JavaScript"); // true
statement.includes("interpreting"); // true
statement.endsWith("."); // true

// replace
statement.replace(/javaScript/gi, "Python");

// part of string
let javascriptWord = statement.slice();
let interpretingWord = statement.substr();
let programmingWord = statement.substring();

// slice
let words = statement.split(" ");
