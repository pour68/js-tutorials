// constant
const PI = 3.14;

/* data types */

// FAMILY: value types

// string
let fullName = "Pouria Nayeb"; // double quotation
let mobile = "09354425459"; // single quotation
let nationalId = `0011054891`; // string interpolation

// character
let charA = "A";

// number
let age = 30; // integer
let weight = 65.25; // float
let distanceBetweenEarthAndMoon = 3.5007e8; // scientific notation

// boolean
let isActive = true;

// undefined
let cousin = undefined;

// none
let myBook = null;

// symbol
let symbol = Symbol;

// date
let birthDate = new Date("1989/06/19");

// FAMILY: reference types

// object
let student = {
  firstName: "Pouria",
  lastName: "Nayeb",
  birthDate: new Date("1989/06/19"),
  nationalId: "09354425459",
  isMarried: true,
};

// array
let todoList = [
  "buy a C# programming book",
  "meeting with father",
  "take pills",
];

// function
let toFahrenheit = (temperature) => temperature * (9 / 5) + 30; // arrow

// class
class Circle {
  constructor(radius) {
    this.PI = 3.14;
    this.radius = radius;
  }

  area() {
    return this.radius * this.radius * this.PI;
  }

  perimeter() {
    return this.radius * 2 * this.PI;
  }
}
