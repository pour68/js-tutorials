// exercise 01: (replace JavaScript and interpreting words at the same time)
let phrase = "JavaScript is an interpreting programming language.";

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
let collection = email.split("@");

let username = collection[0];

let domain = collection[1].split(".")[0];
