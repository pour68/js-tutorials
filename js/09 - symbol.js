// local symbol
let uniqueIdentifier = Symbol("id");

let person = {
  fullName: "Pouria Nayeb",
};

// hidden property
person[uniqueIdentifier] = 1011;

// global symbol
let isbn = Symbol.for("isbn");
let book = {
  title: "the lord of the ring",
};
book[isbn] = 101125;

// get global symbol description
let description = Symbol.keyFor(uniqueIdentifier);
