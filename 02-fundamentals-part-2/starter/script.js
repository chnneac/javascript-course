// console.log("Part 2: Functions ready!");
// ////////////////////////////////////
// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //const juice1 = `Juice with 5 apples and 0 oranges.`;
// //const juice2 = `Juice with 2 apples and 4 oranges.`;
// //const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// //Exercise 1: Personal Greeting
// function addNumbers(a, b) {
//   return a + b;
// }

// function multiplyNumbers(a, b) {
//   return a * b;
// }

// console.log(addNumbers(5, 10));
// console.log(addNumbers(20, 30));

// console.log(multiplyNumbers(3, 4));
// console.log(multiplyNumbers(7, 8)); 

// ////////////////////////////////////
// // Function Expressions
// //const calcAge = function (birthYear) {
// //  return 2037 - birthYear;
// //};

// //const age1 = calcAge(1991);
// //console.log(age1);

// function calcAge(birthYear, currentYear) {
//   const age = currentYear - birthYear;
//   return age;
// }

// const myAge = calcAge(1991, 2037); 
// const herAge = calcAge(2005, 2037);

// console.log(`I am ${myAge} years old`);
// console.log(`She is ${herAge} years old`);

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah")); 

// //Exercise: Restaurant Bill Calculator
// const calculateTip = function(bill, tipPercent) {
//   return bill * (tipPercent / 100);
// };

// const getTotal = function(bill, tip) {
//   return bill + tip;
// };

// const bill = 100;
// const tipPercent = 15;

// const tip = calculateTip(bill, tipPercent);
// const total = getTotal(bill, tip);

// console.log("Tip: $" + tip);    
// console.log("Total: $" + total);

// ////////////////////////////////////
// // Return Values and Scope

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear); 
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const globalVar = "I am global";

// function testScope() {
//   const localVar = "I am local";
//   console.log(globalVar); 
//   console.log(localVar); 
// }

// testScope();
// console.log(globalVar); 

// const userName = "Jonas"; 

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`;
//   const timestamp = new Date().toLocaleTimeString(); // Local to function

//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));

// //Exercise: Temperature Converter and Describer
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5/9;
// }

// function describeTemperature(temp, unit) {
//   let celsius;

//   if (unit === "C") {
//     celsius = temp;
//   } else if (unit === "F") {
//     celsius = fahrenheitToCelsius(temp);
//   } else {
//     return "Invalid unit. Use 'C' or 'F'.";
//   }

//   if (celsius > 30) {
//     return "Hot";
//   } else if (celsius >= 20 && celsius <= 30) {
//     return "Warm";
//   } else if (celsius >= 10 && celsius < 20) {
//     return "Cool";
//   } else {
//     return "Cold";
//   }
// }

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(30));

// console.log(fahrenheitToCelsius(32));
// console.log(fahrenheitToCelsius(86));

// console.log(describeTemperature(35, "C"));
// console.log(describeTemperature(25, "C"));
// console.log(describeTemperature(15, "C"));
// console.log(describeTemperature(5, "C")); 

// console.log(describeTemperature(95, "F"));
// console.log(describeTemperature(77, "F"));
// console.log(describeTemperature(59, "F"));
// console.log(describeTemperature(41, "F"));

// ////////////////////////////////////
// // Coding Challenge #1

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
//   }
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // JavaScript Fundamentals Part 2 - Hour 1

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// ////////////////////////////////////
// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length); // 3

// console.log(friends[friends.length - 1]);

// friends[1] = "Jay";
// console.log(friends); 

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);

// //Exercise 1: Personal Arrays
// let hobbies = ["Watching Movies/Series", "Gaming", "Crocheting"];

// let numbers = [10, 9, 8, 18, 5];

// console.log("First hobby:", hobbies[0]); 
// console.log("Last hobby:", hobbies[hobbies.length - 1]);

// console.log("First number:", numbers[0]); 
// console.log("Last number:", numbers[numbers.length - 1]);

// hobbies[1] = "Eating New Foods";
// console.log("Updated hobbies:", hobbies);

// let aboutMe = ["Cheyenne", 20, true]; 
// console.log("About Me:", aboutMe);

////////////////////////////////////
// Array Methods - Adding Elements

// const friends = ["Michael", "Steven", "Peter"];

// const newLength = friends.push("Jay");
// console.log(friends); 
// console.log(newLength);

// friends.unshift("John");
// console.log(friends); 

// const popped = friends.pop();
// console.log(popped); 
// console.log(friends); 

// const shifted = friends.shift();
// console.log(shifted); 
// console.log(friends); 

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// //Exercise 2: Fruit Basket
// let fruits = ["apple", "banana"];

// fruits.push("orange");
// console.log("After push:", fruits);

// fruits.unshift("grape");
// console.log("After unshift:", fruits);

// fruits.pop();
// console.log("After pop:", fruits);

// let hasBanana = fruits.includes("banana");
// console.log("includes('banana'):", hasBanana);

// let indexGrape = fruits.indexOf("grape");
// console.log("indexOf('grape'):", indexGrape);

// console.log("Final array:", fruits);

////////////////////////////////////
// Array Iteration - Loops

// const friends = ["Michael", "Steven", "Peter"];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages)

// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

// //Exercise 3: Number Processing
// const numbers = [10, 25, 30, 15, 40];

// let doubled = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubled.push(numbers[i] * 2);
// }
// console.log("Doubled numbers:", doubled);

// numbers.forEach((num, index) => {
//   console.log(`Index ${index}: ${num}`);
// });

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("Sum of numbers:", sum);

// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 20) {
//     count++;
//   }
// }
// console.log("Count greater than 20:", count);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// JavaScript Fundamentals Part 2 - Hour 2

////////////////////////////////////
// The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); 
// console.log(jonasArray[1]); 
// console.log(jonasArray[2]);

// ////////////////////////////////////
// // Objects - Creation with Object Literal Syntax
// console.log("=== OBJECTS ===");

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann", 
//   age: 2037 - 1991, 
//   job: "teacher", 
//   friends: ["Michael", "Peter", "Steven"], 
// };
// console.log(jonas);

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   46,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonasObject = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]
// };

// console.log(jonas.firstName); 
// console.log(jonas.lastName); 
// console.log(jonas.age); 
// console.log(jonas.job); 
// console.log(jonas.friends); 

// console.log(jonas["firstName"]);
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); 
// console.log(jonas["last" + nameKey]);

// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);

// //Exercise 1: Personal Object
// const book = {
//   title: "The Perks of Being a Sunflower",
//   author: "Stephen Chbosky",
//   pages: 254,
//   isRead: true
// };

// const playlist = {
//   name: "Chappell Roan Essentials",
//   creator: "Cheyenne",
//   songs: [
//     "The Subway",
//     "Red Wine Supernova",
//     "Casual",
//     "HOT TO GO!",
//     "Pink Pony Club",
//     "Good Luck, Babe!"
//   ],
//   genre: "Pop"
// };

// console.log(book.title);
// console.log(book["author"]);
// console.log(playlist.name);
// console.log(playlist["creator"]);

// book.yearPublished = 1999; 
// playlist.duration = "45 minutes";

// book.isRead = false;                  
// playlist.genre = "Pop";         

// console.log("Updated Book:", book);
// console.log("Updated Playlist:", playlist);

// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city); 

////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcAge(1991)); 
// console.log(jonas.calcAge(jonas.birthYear)); 

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear; 
//   },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

// //Exercise 2: Calculator Object
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     if (this.operator === "+") return this.add();
//     if (this.operator === "-") return this.subtract();
//     if (this.operator === "*") return this.multiply();
//     if (this.operator === "/") return this.divide();
//     return "Invalid operator";
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// console.log(calculator.calculate());   // 15
// console.log(calculator.getResult());   // "10 + 5 = 15"

// calculator.operator = "*";
// console.log(calculator.getResult());   // "10 * 5 = 50"

// ////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   getSummary: function () {
//     this.calcAge(); 
//     return `
// Profile Summary

// Name: ${this.firstName} ${this.lastName}
// Age: ${this.age}
// Location: ${this.location}
// Status: ${this.isActive ? "Online" : "Offline"}
// Friends: ${this.friends.length} (Active: ${this.getActiveFriends()})
// Interests: ${this.interests.join(", ")}
//     `;
//   },
// };

// console.log(user.getSummary());

// user.addFriend("Alex", "active");
// user.toggleStatus();

// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// JavaScript Fundamentals Part 2 - Hour 3

////////////////////////////////////
// Selecting DOM Elements

// querySelector - works with any CSS selector
// const message = document.querySelector(".message"); 
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); 
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length); 

//Exercise 1: Element Selection Practice
// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// const buttonQuery = document.querySelector("#btn"); 
// const buttonById = document.getElementById("btn"); 
// console.log(buttonQuery === buttonById); 

// const allSpans = document.querySelectorAll("span");
// console.log(allSpans); 

// const firstSpan = document.querySelector("span");
// console.log(firstSpan.textContent);

// console.log(document.querySelector(".guess"));
// console.log(document.querySelector("#btn"));
// console.log(document.querySelector("div span"));
// console.log(document.querySelectorAll(".container span"));

////////////////////////////////////
// Modifying Element Content

// const message = document.querySelector(".message");

// console.log(message.textContent); // "Start interacting!"
// message.textContent = "Hello from JavaScript!";

// message.innerHTML = "<strong>Bold text from JS!</strong>";

// console.log(message.innerText);

// const input = document.querySelector(".guess");

// console.log(input.value); 
// input.value = "Default text"; 
// input.placeholder = "Type here"; 

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"; 
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

//Exercise 2: Content and Style Practice
// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// heading.textContent = "Cheyenne"; 

// button.style.backgroundColor = "blue";
// button.style.color = "white";
// button.style.padding = "10px 20px";
// button.style.border = "none";
// button.style.borderRadius = "5px";

// input.placeholder = "Type something cool...";

// message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "green";
// scoreValue.style.fontWeight = "bold";

////////////////////////////////////
// Event Listeners - User Interaction

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// element.addEventListener("eventType", function () {
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

//Exercise 3: Event Listener Practice
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// heading.addEventListener("click", function () {
//   heading.style.color = "purple";
// });

// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });

// JavaScript Fundamentals Part 2 - Hour 4