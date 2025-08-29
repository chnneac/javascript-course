console.log("Part 2: Functions ready!");
////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

function logger() {
  console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//const juice1 = `Juice with 5 apples and 0 oranges.`;
//const juice2 = `Juice with 2 apples and 4 oranges.`;
//const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

//Exercise 1: Personal Greeting
function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

console.log(addNumbers(5, 10));
console.log(addNumbers(20, 30));

console.log(multiplyNumbers(3, 4));
console.log(multiplyNumbers(7, 8)); 

////////////////////////////////////
// Function Expressions
//const calcAge = function (birthYear) {
//  return 2037 - birthYear;
//};

//const age1 = calcAge(1991);
//console.log(age1);

function calcAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge(1991, 2037); 
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah")); 

//Exercise: Restaurant Bill Calculator
const calculateTip = function(bill, tipPercent) {
  return bill * (tipPercent / 100);
};

const getTotal = function(bill, tip) {
  return bill + tip;
};

const bill = 100;
const tipPercent = 15;

const tip = calculateTip(bill, tipPercent);
const total = getTotal(bill, tip);

console.log("Tip: $" + tip);    
console.log("Total: $" + total);

////////////////////////////////////
// Return Values and Scope

function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); 
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

const globalVar = "I am global";

function testScope() {
  const localVar = "I am local";
  console.log(globalVar); 
  console.log(localVar); 
}

testScope();
console.log(globalVar); 

const userName = "Jonas"; 

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`;
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));

//Exercise: Temperature Converter and Describer
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function describeTemperature(temp, unit) {
  let celsius;

  if (unit === "C") {
    celsius = temp;
  } else if (unit === "F") {
    celsius = fahrenheitToCelsius(temp);
  } else {
    return "Invalid unit. Use 'C' or 'F'.";
  }

  if (celsius > 30) {
    return "Hot";
  } else if (celsius >= 20 && celsius <= 30) {
    return "Warm";
  } else if (celsius >= 10 && celsius < 20) {
    return "Cool";
  } else {
    return "Cold";
  }
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(30));

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(86));

console.log(describeTemperature(35, "C"));
console.log(describeTemperature(25, "C"));
console.log(describeTemperature(15, "C"));
console.log(describeTemperature(5, "C")); 

console.log(describeTemperature(95, "F"));
console.log(describeTemperature(77, "F"));
console.log(describeTemperature(59, "F"));
console.log(describeTemperature(41, "F"));

////////////////////////////////////
// Coding Challenge #1

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
  }
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// JavaScript Fundamentals Part 2 - Hour 1