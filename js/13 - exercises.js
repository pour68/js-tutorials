// closures: outer/inner function
function add(num1, num2) {
  function addition() {
    return `result: ${num1 + num2}`;
  }

  return addition();
}

add(10, 20); // result: 30

// arguments
function fullName(firstName, middleName, lastName) {
  return arguments.length;
}

console.log(fullName("pouria", "nayeb", "aboughasem")); // 3

// power
function pow(base, power) {
  if (power == 0) return 1;

  return base * pow(base, power - 1);
}

// add positive values less than target number
const add = (number) => {
  if (number === 0) return 0;

  return number > 0 ? number + sum(number - 1) : number + sum(number + 1);
};

// add number between two values
const total = (start, end) => (end > start ? end + total(start, end - 1) : end);

// add number between two values without start and end numbers
const total = (start, end) =>
  end - 1 > start ? end - 1 + total(start, end - 1) : 0;

// find max value from array
function max(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }

  return max;
}

function inverseNumbers(number) {
  if (number < 10) return number;

  let numberArray = number.toString().split("");
  console.log(numberArray);
}

function min(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }

  return min;
}

// function inverseNumbers(number) {
//   if (number < 10) return number;

//   let numberArray = number.toString().split("");
//   let container = "";

//   for (let i = numberArray.length - 1; i >= 0; i--) {
//     container += numberArray[i];
//   }

//   return parseInt(container);
// }

// const inverseNumber = (number) => number.toString().split("").reverse().join("");

function reverseNumber(number) {
  let value = Math.abs(number);
  if (value < 10) return value;

  let stringValue = value.toString();

  return reverseNumber(stringValue.substr(1)) + stringValue.charAt(0);
}

function inverseNumbers(number) {
  let value = Math.abs(number);

  let numberArray = value.toString().split("");

  if (numberArray.length < 2) return value;

  let lastIndex = numberArray.length - 1;
  let remainFromNumber = numberArray.splice(lastIndex, 1);
  let join = numberArray.join("");

  return remainFromNumber + inverseNumbers(parseInt(join));
}

function inverseNumber(number) {
  let value = Math.abs(number);
  let numberArray = value.toString().split("");

  if (numberArray.length < 2) return value;

  let remainFromNumber = numberArray.pop();
  let join = numberArray.join("");

  return remainFromNumber + inverseNumber(parseInt(join));
}

function gcd(num1, num2) {
  if (num1 == num2) return num1;
  if (num1 > num2) return gcd(num1 - num2, num2);
  if (num1 < num2) return gcd(num1, num2 - num1);
}

function lcm(num1, num2) {
  return Math.abs(num1 * num2) / gcd(num1, num2);
}
