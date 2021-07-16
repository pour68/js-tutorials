// named function
function isPrime(number) {
  // if user enter wrong value other than number
  if (typeof number !== "number") {
    return false;
  }

  if (number < 2) return false;

  // if number is float
  let output = Math.round(number);

  if (output === 2) return true;

  for (let i = 2; i < output; i++) {
    if (output % i === 0) return false;
  }

  return true;
}

function isPrime(number) {
  if (number < 2) return false;

  if (typeof number !== "number") {
    return false;
  }

  let integer = Math.round(number);

  let root = Math.ceil(Math.sqrt(integer));

  for (let i = 2; i <= root; i++) {
    if (integer % i === 0) return false;
  }

  return true;
}

isPrime(11);

// anonymous function

// arrow function
const isEven = (number) => number % 2 === 0;

// auto invoked function
(function () {
  console.log("auto invoked");
})();

// constructor function
function Book(title, author, isbn, price) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.price = price;

  this.details = function () {
    return this.title + " " + this.author;
  };
}

// let harryPotter1 = new Book();

// factory function
function Student(
  firstName,
  middleName,
  lastName,
  studentId,
  entranceDate,
  isGraduate,
  courseGrades,
  average
) {
  return {
    firstName,
    middleName,
    lastName,
    studentId,
    entranceDate,
    isGraduate,
    courseGrades,
    average,
  };
}

// let amirHossein = Student("amirhossein", null, null, null, null, null, null, null);

// console.log(amirHossein);


// recursive function

// basic example
function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

// intermediate example
function fibonacci(position) {
  if (position === 0) {
    return 0;
  }

  if (position === 1) {
    return 1;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

// generator function

// basic example
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
// ...

// intermediate example
function* powers(n) {
  //endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (let power of powers(2)) {
  if (power > 32) break;
  console.log(power);
  //2
  //4
  //8
  //16
  //32
}
