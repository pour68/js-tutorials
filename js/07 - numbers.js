let temperature = 40.37;

let temperatureValue = temperature.toExponential(2); // 4.04e1
let temperatureFixed = temperature.toFixed(1); // 40.4
let temperaturePrecision = temperature.toPrecision(3); // 40.4
let temperatureConversion = temperature.toLocaleString("fa-IR", {
  style: "currency",
  currency: "IRR",
}); // ‎ریال ۴۰
