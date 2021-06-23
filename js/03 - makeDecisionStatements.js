/* if else */

// basic example
let width = 1366;
let height = 768;
let screenOrientation;

if (width > height) {
  screenOrientation = "horizontal";
} else {
  screenOrientation = "vertical";
}

// ternary operator
let myScreenOrientation = width > height ? "horizontal" : "vertical";

// intermediate example
let isCriminal = false;
let balance = 4000;
let isEligibleForLoan;

if (balance > 2500 && !isCriminal) {
  isEligibleForLoan = true;
} else {
  isEligibleForLoan = false;
}

/* switch case */
let total = 256_000;
let offPercentage;
let userStatus = "bronze";

switch (userStatus) {
  case "bronze":
    offPercentage = 5;
    break;
  case "silver":
    offPercentage = 10;
    break;
  case "gold":
    offPercentage = 25;
    break;
  default:
    offPercentage = 0;
    break;
}

total -= total * (offPercentage / 100);
