// JavaScript Fundamentals - Part 1
// We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log ("=== VARIABLE ===")

// const exercise = "Exercise 1";
// console.log(exercise);

// let firstname = "Cheyenne";
// console.log("First Name:", firstname);

// let age = 18;
// age = 19; 
// console.log("Age:", age);

// const birthYear =  2005;
// console.log("Birth Year:", birthYear);

// const favoriteNumber = 9;
// console.log("Favorite Number:", favoriteNumber);

// const question = "Do I like JavaScript?";
// console.log("Question:", question);
// let doILikeJavaScript = true;
// console.log(doILikeJavaScript);
// console.log(typeof doILikeJavaScript);

//////////////////////////////////

// const PI = 3.1415
// console.log(PI);

// var job = "Artists"
// job = "Digital Artists"
// console.log(job);

// const country = "Philippines";
// console.log(country);
// const language = "Tagalog";
// const population = "115.8 million"

// age = 21;

// let lastName = "Badiong"
// console.log(lastName);

// console.log("=== DATA TYPES ===");

// age = 19;
// console.log(age); 19
// console.log(typeof age);

// let username = "yoshi"
// console.log(username);
// console.log(typeof username);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(birthYear); undefined
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now, I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// const exercise1 = "Exercise 2";
// console.log(exercise1);

// let score = 100;
// console.log(score);

// score = 150;
// console.log(score);

// const highScore = 100;
// console.log(highScore);

// highScore = 150; it throw a Typeerror

/////////////////////////////////////
// Basic Operators = Math Operators
// console.log("=== MATH OPERATORS ==="); '=== MATH OPERATORS ==='

// const now = 2037;
// const ageCheyenne = now - 1991;
// const ageGela = now - 2018
// console.log(ageCheyenne); [46, 19]

// console.log(ageCheyenne * 2, ageGela / 10, 2 ** 3); [92, 4.6, 8]

// console.log("Math operations:"); 'Math operations:'
// console.log("Addition:", 10 + 5); [ 'Addition:', 15 ]
// console.log("Subtraction:", 20 - 8); [ 'Subtraction:', 12 ]
// console.log("Multiplication:",  4 * 7); [ 'Multiplication:', 28 ]
// console.log("Division:", 15 / 3); [ 'Division:', 5 ]
// console.log("Exponentiation:", 2 ** 3); [ 'Exponentiation', 8 ]

// const firstname = "Cheyenne";
// const lastName = "Badiong";
// console.log(firstname + " " + lastName); 'Cheyenne Badiong'

// console.log("Hello" + "World" + "!");
// console.log("I am " + 25 + " years old"); 'I am 25 years old'

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 15;
// console.log("x starts as:", x);

// x += 10; 
// console.log("x starts as:", x);

// x *= 4; 
// console.log("x starts as:", x);

// x /= 2; 
// console.log("x starts as:", x);

// x++; 
// console.log("x starts as:", x);

// x--; 
// console.log("x starts as:", x);

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageCheyenne> ageGela); 
// console.log(ageGela >= 18); 
// console.log(ageCheyenne < 30);

// console.log("Number comparisons:");
// console.log(25 > 20); true
// console.log(15 < 10); false
// console.log(18 >= 18); true
// console.log(16 <= 15); false

// const isFullAge = ageGela >= 18;
// console.log("Complex comparison"); 
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageCheyenne + ageGela) /2;
// console.log(ageCheyenne, ageGela, averageAge)

// Coding Challenge #1 - BMI Calculator
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = (massMark / heightMark **2);
// const BMIJohn = (massJohn / heightJohn **2);

// console.log("Total of Mark's BMI", BMIMark);
// console.log("Total of John's BMI", BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
                                                                                   
// console.log("BMI comparison: Is mark's BMI higher?");
// console.log(BMIMark >= BMIJohn)

////////////////////////////////////

// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew =  `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

const exercise3 = "Exercise 1";
console.log(exercise3);

const myName = "Cheyenne";
const myAge = 20;
const myJob = "Student";
const currentYear = 2025;

const intro = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
console.log(intro);

const exercise4 = "Exercise 2";
console.log(exercise4);

const details = `Born in ${currentYear - myAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;
console.log(details);

////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear1 = 2012;

let century;
if (birthYear1 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

const exercise5 = "Exercise 1";
console.log(exercise5);

const testScore = 78; 
if (testScore >= 90) {
  console.log("Excellent! Grade A");
} else if (testScore >= 80) {
  console.log("Good job! Grade B");
} else if (testScore >= 70) {
  console.log("Not bad! Grade C");
} else if (testScore >= 60) {
  console.log("You passed! Grade D");
} else {
  console.log("You failed! Study harder");
}

const exercise6 = "Exercise 2";
console.log(exercise6);

const userAge = 20;

if (userAge >= 18) {
  console.log("Welcome! You can access all content");
} else if (userAge >= 13) {
  console.log("Welcome! Restricted content only");
} else {
  console.log("Sorry, you're too young");
}

////////////////////////////////////
// Truthy and Falsy Values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); // This runs even though height IS defined!
}

if (height !== undefined) {
  console.log("Height is defined");
}

const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

for (const value of values) {
  console.log("Value:", value);
  console.log("Boolean:", Boolean(value));
  if (value) {
    console.log("Truthy!");
  } else {
    console.log("Falsy!");
  }
  console.log("----------");
}

////////////////////////////////////
// Coding Challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// If/else statement with template literals
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
  console.log(`Both have the same BMI (${BMIMark})!`);
}