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

console.log(fullName("pouria","nayeb","aboughasem")); // 3
