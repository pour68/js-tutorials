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
function add(number) {
  if (number === 0) return 0;

  return number + add(number - 1);
}

// add number between two values
const total = (start, end) => (end > start) ? end + total(start, end - 1) : end;

// add number between two values without start and end numbers
const total = (start, end) => (end - 1 > start) ? end - 1 + total(start, end - 1) : 0;