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
console.log("=== MATH OPERATORS ==="); '=== MATH OPERATORS ==='

const now = 2037;
const ageCheyenne = now - 1991;
const ageGela = now - 2018
console.log(ageCheyenne); [46, 19]

console.log(ageCheyenne * 2, ageGela / 10, 2 ** 3); [92, 4.6, 8]

console.log("Math operations:"); 'Math operations:'
console.log("Addition:", 10 + 5); [ 'Addition:', 15 ]
console.log("Subtraction:", 20 - 8); [ 'Subtraction:', 12 ]
console.log("Multiplication:",  4 * 7); [ 'Multiplication:', 28 ]
console.log("Division:", 15 / 3); [ 'Division:', 5 ]
console.log("Exponentiation:", 2 ** 3); [ 'Exponentiation', 8 ]

const firstname = "Cheyenne";
const lastName = "Badiong";
console.log(firstname + " " + lastName); 'Cheyenne Badiong'

console.log("Hello" + "World" + "!");
console.log("I am " + 25 + " years old"); 'I am 25 years old'

console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 15;
console.log("x starts as:", x);

x += 10; 
console.log("x starts as:", x);

x *= 4; 
console.log("x starts as:", x);

x /= 2; 
console.log("x starts as:", x);

x++; 
console.log("x starts as:", x);

x--; 
console.log("x starts as:", x);

console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageCheyenne> ageGela); 
console.log(ageGela >= 18); 
console.log(ageCheyenne < 30);

console.log("Number comparisons:");
console.log(25 > 20); true
console.log(15 < 10); false
console.log(18 >= 18); true
console.log(16 <= 15); false

const isFullAge = ageGela >= 18;
console.log("Complex comparison"); 
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageCheyenne + ageGela) /2;
console.log(ageCheyenne, ageGela, averageAge)

// Coding Challenge #1 - BMI Calculator
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = (massMark / heightMark **2);
const BMIJohn = (massJohn / heightJohn **2);

console.log("Total of Mark's BMI", BMIMark);
console.log("Total of John's BMI", BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
                                                                                   
console.log("BMI comparison: Is mark's BMI higher?");
console.log(BMIMark >= BMIJohn)

////////////////////////////////////