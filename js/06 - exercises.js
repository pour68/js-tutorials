// exercise 01: (replace JavaScript and interpreting words at the same time)
let phrase = "JavaScript is an interpreting programming language.";

// method 2 (beginner friendly)

phrase.replace("JavaScript", "C#").replace("interpreting", "compiling");

// method 1 (advance shape)
const mapObj = {
  JavaScript: "C#",
  interpreting: "compiling",
};

phrase = phrase.replace(
  /\b(?:JavaScript|interpreting)\b/gi,
  (matched) => mapObj[matched]
);

// exercise 02: extract username and domain name from email address.
const email = "pouria-nayeb@outlook.com";
let collection = email.split("@"); // ["pouria-nayeb", "outlook.com"]

// method 1:
let username = collection[0];
// method 2:
let userName = email.substring(0, email.indexOf("@"));

let domain = collection[1].split(".")[0];

// method 1:
let topLevelDomain = collection[1].split(".")[1];
// method 2:
let topLevelDomainValue = email.substring(email.lastIndexOf("."));
