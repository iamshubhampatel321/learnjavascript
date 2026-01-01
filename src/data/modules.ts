export interface Topic {
  title: string;
  definition: string;
  example?: string;
  code?: string;
  subtopics?: Topic[];
}

export interface Module {
  title: string;
  description: string;
  topics: Topic[];
}

export const modules: Module[] = [
  {
    title: "JavaScript Basics",
    description: "Think of this as learning the alphabet before writing stories.",
    topics: [
      {
        title: "What is JavaScript?",
        definition: "JavaScript is a programming language that makes websites interactive and fun! It's like magic that brings web pages to life - making buttons work, animations move, and games playable.",
        example: "Just like how a remote control makes your TV change channels, JavaScript makes websites respond when you click buttons or type in forms!",
        code: `// This is JavaScript - it can show messages!
console.log("Hello, World!");
console.log("I'm learning JavaScript!");`
      },
      {
        title: "How JavaScript Runs",
        definition: "JavaScript runs in two main places: in your web browser (like Chrome or Firefox) and on computers using Node.js. When you visit a website, the browser reads the JavaScript code and makes things happen!",
        example: "Think of your browser as a robot that reads JavaScript instructions and follows them to make the webpage do cool things!",
        code: `// The browser runs this code and shows the result
alert("Welcome to my website!");`
      },
      {
        title: "Adding JavaScript to HTML",
        definition: "There are three ways to add JavaScript to your web page: directly in HTML tags (inline), inside the HTML file (internal), or in a separate file (external).",
        example: "It's like adding toppings to a pizza - you can sprinkle them on top, mix them in, or keep them in separate containers!",
        subtopics: [
          {
            title: "Inline JavaScript",
            definition: "Writing JavaScript directly inside HTML tags.",
            code: `<button onclick="alert('You clicked me!')">Click Me</button>`
          },
          {
            title: "Internal JavaScript",
            definition: "Writing JavaScript inside <script> tags in your HTML file.",
            code: `<script>
  console.log("This JavaScript is inside the HTML!");
</script>`
          },
          {
            title: "External JavaScript",
            definition: "Writing JavaScript in a separate .js file and linking it to your HTML.",
            code: `<!-- In your HTML file -->
<script src="script.js"></script>

// In script.js file
console.log("This comes from an external file!");`
          }
        ]
      },
      {
        title: "console.log() and Debugging",
        definition: "console.log() is like a magic window that lets you see what's happening in your code. It prints messages to the browser's console, which helps you find and fix problems (bugs)!",
        example: "Imagine you're baking cookies and you check them every few minutes. console.log() is like checking your code to see if everything is working correctly!",
        code: `// Using console.log to see what's happening
console.log("Starting my program...");
let age = 10;
console.log("My age is:", age);
console.log("Program finished!");`
      }
    ]
  },
  {
    title: "Variables & Data Types",
    description: "Where JavaScript learns to remember things.",
    topics: [
      {
        title: "Variables: var, let, const",
        definition: "Variables are like labeled boxes where you can store information. 'let' is for things that can change, 'const' is for things that stay the same, and 'var' is the old way (we mostly use let and const now).",
        example: "Think of variables like labeled jars in your kitchen - one jar for 'Sugar' (const, because the label doesn't change), one for 'Cookies Left' (let, because the number changes when you eat them)!",
        code: `// Using let for values that can change
let score = 0;
score = 10;  // Can change it!

// Using const for values that stay the same
const myName = "Alex";
// myName = "Bob";  // ERROR! Can't change const

// Using var (old way, avoid using it)
var oldWay = "I'm the old method";`
      },
      {
        title: "Rules for Naming Variables",
        definition: "Variables must start with a letter, $ or _. They can't have spaces or special characters. Use meaningful names so you remember what they store!",
        example: "Just like you can't name your pet '123' or 'My Dog!', variables have naming rules too!",
        code: `// Good variable names
let playerScore = 100;
let userName = "Sam";
let _privateData = "secret";
let $price = 9.99;

// Bad variable names (these will cause errors!)
// let 123abc = "wrong";  // Can't start with number
// let my-score = 50;     // Can't use dash
// let my score = 50;     // Can't have spaces`
      },
      {
        title: "Data Types - Primitive Types",
        definition: "Data types are like different kinds of toys - numbers for math, strings for text, booleans for true/false, null for 'empty on purpose', and undefined for 'not set yet'.",
        example: "Like having different boxes for different toys - one for action figures (strings), one for marbles (numbers), and one for yes/no cards (booleans)!",
        subtopics: [
          {
            title: "String (Text)",
            definition: "Strings are text wrapped in quotes. Use them for words, sentences, or any text!",
            code: `let name = "Alice";
let message = 'Hello, world!';
let sentence = "I'm 10 years old!";
console.log(name);  // Shows: Alice`
          },
          {
            title: "Number",
            definition: "Numbers are for math! They can be whole numbers or decimals.",
            code: `let age = 10;
let price = 9.99;
let temperature = -5;
console.log(age + 5);  // Shows: 15`
          },
          {
            title: "Boolean (True/False)",
            definition: "Booleans are like switches - either true (on) or false (off).",
            code: `let isRaining = true;
let isSunny = false;
let hasFinishedHomework = true;
console.log(isRaining);  // Shows: true`
          },
          {
            title: "Null & Undefined",
            definition: "Null means 'empty on purpose', undefined means 'not set yet'.",
            code: `let emptyBox = null;  // Intentionally empty
let notSetYet;  // undefined (no value given)
console.log(emptyBox);      // null
console.log(notSetYet);     // undefined`
          }
        ]
      },
      {
        title: "Data Types - Non-Primitive Types",
        definition: "Non-primitive types can hold multiple values! Objects store related data together, and arrays store lists of items.",
        example: "Like a backpack (object) that holds your pencil case, lunch box, and books (properties), or a shopping list (array) with multiple items!",
        code: `// Array - a list of items
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // Shows: apple

// Object - related data together
let student = {
  name: "Sam",
  age: 10,
  grade: 5
};
console.log(student.name);  // Shows: Sam`
      },
      {
        title: "typeof Operator",
        definition: "The typeof operator tells you what type of data you have. It's like asking 'what kind of thing is this?'",
        example: "Like checking if something is a toy, a book, or food - typeof tells you what category your data belongs to!",
        code: `console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (weird!)
console.log(typeof [1, 2, 3]);   // "object"`
      },
      {
        title: "Type Conversion & Coercion",
        definition: "Type conversion is when you change data from one type to another on purpose. Type coercion is when JavaScript does it automatically (sometimes in surprising ways!)",
        example: "Like turning ice into water (conversion) or ice melting on its own on a hot day (coercion)!",
        code: `// Type Conversion (you do it)
let num = "123";
let realNumber = Number(num);  // Convert string to number
console.log(realNumber + 10);  // 133

let age = 10;
let ageText = String(age);  // Convert number to string
console.log(ageText + "10");  // "1010" (combines text)

// Type Coercion (JavaScript does it)
console.log("5" + 3);   // "53" (makes number a string)
console.log("5" - 3);   // 2 (makes string a number)
console.log(true + 1);  // 2 (true becomes 1)`
      }
    ]
  },
  {
    title: "Operators",
    description: "The math and logic toolkit.",
    topics: [
      {
        title: "Arithmetic Operators",
        definition: "These operators do math! Addition (+), subtraction (-), multiplication (*), division (/), remainder (%), and exponentiation (**).",
        example: "Just like using a calculator! You can add your pocket money, subtract what you spent, multiply to find totals, and divide to share with friends!",
        code: `let a = 10;
let b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1 (remainder)
console.log(a ** b);  // 1000 (10 to power of 3)`
      },
      {
        title: "Assignment Operators",
        definition: "These operators give values to variables. The = sign assigns a value, and you can combine it with math operators for shortcuts!",
        example: "Like filling a piggy bank! = puts money in, += adds more, -= takes some out!",
        code: `let score = 10;       // Assign 10
score += 5;          // Same as: score = score + 5
console.log(score);  // 15

score -= 3;          // Same as: score = score - 3
console.log(score);  // 12

score *= 2;          // Same as: score = score * 2
console.log(score);  // 24

score /= 4;          // Same as: score = score / 4
console.log(score);  // 6`
      },
      {
        title: "Comparison Operators",
        definition: "These compare two values and give you true or false. == checks if values are similar, === checks if they're exactly the same (including type)!",
        example: "Like comparing two toys - are they the same color? The same size? Exactly the same toy?",
        code: `console.log(5 == "5");    // true (same value, different type)
console.log(5 === "5");   // false (different types!)
console.log(5 === 5);     // true (exactly same)

console.log(10 > 5);      // true (greater than)
console.log(10 < 5);      // false (less than)
console.log(10 >= 10);    // true (greater or equal)
console.log(5 != 10);     // true (not equal)
console.log(5 !== "5");   // true (not equal, strict)`
      },
      {
        title: "Logical Operators",
        definition: "These combine true/false values! AND (&&) means both must be true, OR (||) means at least one must be true, NOT (!) flips true to false and vice versa.",
        example: "Like making decisions: 'I'll go outside if it's sunny AND I've finished homework' or 'I'll have ice cream OR cake' or 'It's NOT raining'!",
        code: `let isSunny = true;
let hasHomework = false;

// AND - both must be true
console.log(isSunny && hasHomework);  // false

// OR - at least one must be true
console.log(isSunny || hasHomework);  // true

// NOT - flips the value
console.log(!isSunny);                // false
console.log(!hasHomework);            // true

// Combining them
let canGoOut = isSunny && !hasHomework;
console.log(canGoOut);  // true`
      },
      {
        title: "Unary & Ternary Operators",
        definition: "Unary operators work with one value (like ++ to increase by 1). Ternary operator is a shortcut for if-else - it's like asking a question and choosing between two answers!",
        example: "Unary is like pressing a '+1' button. Ternary is like asking 'Is it raining? If yes, take umbrella, if no, wear sunglasses!'",
        code: `// Unary operators
let count = 5;
count++;         // Increase by 1
console.log(count);  // 6

count--;         // Decrease by 1
console.log(count);  // 5

// Ternary operator: condition ? ifTrue : ifFalse
let age = 10;
let ticket = age < 12 ? "child ticket" : "adult ticket";
console.log(ticket);  // "child ticket"

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);  // "B"`
      }
    ]
  },
  {
    title: "Control Flow",
    description: "Teaching JavaScript how to choose paths.",
    topics: [
      {
        title: "if, else, else if",
        definition: "These help your code make decisions! 'if' checks a condition, 'else' handles when it's false, and 'else if' checks another condition.",
        example: "Like deciding what to wear: IF it's raining, wear a raincoat, ELSE IF it's cold, wear a jacket, ELSE wear a t-shirt!",
        code: `let temperature = 20;

if (temperature > 30) {
  console.log("It's hot! 🌞");
} else if (temperature > 20) {
  console.log("It's nice! 😊");
} else if (temperature > 10) {
  console.log("It's cool! 🧥");
} else {
  console.log("It's cold! 🥶");
}

// Another example
let score = 85;
if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Great!");
} else {
  console.log("Keep practicing!");
}`
      },
      {
        title: "switch Statement",
        definition: "Switch is like a menu with many choices. It checks one value against many possible options and runs the matching code.",
        example: "Like choosing from a restaurant menu - if you pick option 1, you get pizza; option 2, you get pasta; option 3, you get salad!",
        code: `let day = 3;

switch (day) {
  case 1:
    console.log("Monday - School day! 📚");
    break;
  case 2:
    console.log("Tuesday - Math class! 🔢");
    break;
  case 3:
    console.log("Wednesday - Art class! 🎨");
    break;
  case 6:
  case 7:
    console.log("Weekend - Play time! 🎮");
    break;
  default:
    console.log("Another school day!");
}

// Another example
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("🍎 Apples are crunchy!");
    break;
  case "banana":
    console.log("🍌 Bananas are sweet!");
    break;
  default:
    console.log("I don't know that fruit!");
}`
      },
      {
        title: "Truthy & Falsy Values",
        definition: "In JavaScript, some values act like 'true' (truthy) and some act like 'false' (falsy) when used in conditions. Falsy values are: false, 0, empty string '', null, undefined, and NaN.",
        example: "Like checking if your toy box has toys - an empty box (falsy) versus a box with toys (truthy)!",
        code: `// Falsy values (act like false)
if (0) {
  console.log("This won't run");
}

if ("") {
  console.log("This won't run either");
}

// Truthy values (act like true)
if ("hello") {
  console.log("This WILL run! 🎉");
}

if (42) {
  console.log("This WILL run too! 🎉");
}

// Practical example
let userName = "";
if (userName) {
  console.log("Welcome, " + userName);
} else {
  console.log("Please enter your name!");
}`
      }
    ]
  },
  {
    title: "Loops & Iteration",
    description: "When repetition becomes powerful.",
    topics: [
      {
        title: "for Loop",
        definition: "A for loop repeats code a specific number of times. It has three parts: starting point, stopping condition, and step (how much to change each time).",
        example: "Like doing jumping jacks - start at 1, count to 10, add 1 each time. Jump, count, jump, count, until you reach 10!",
        code: `// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Shows: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// Print even numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// Shows: 2, 4, 6, 8, 10

// Countdown
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off! 🚀");`
      },
      {
        title: "while Loop",
        definition: "A while loop keeps repeating as long as a condition is true. It's like saying 'keep doing this WHILE something is true'.",
        example: "Like eating cookies while there are cookies left in the jar - you keep eating (looping) while cookies exist!",
        code: `// Count to 5 with while
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++;
}

// Keep doubling until over 100
let number = 1;
while (number < 100) {
  console.log(number);
  number = number * 2;
}
// Shows: 1, 2, 4, 8, 16, 32, 64

// Be careful - avoid infinite loops!
// while (true) {
//   console.log("This never stops! 😱");
// }`
      },
      {
        title: "do...while Loop",
        definition: "Similar to while, but it ALWAYS runs at least once before checking the condition. It does first, then checks!",
        example: "Like trying a new food - you try it once (do), then decide if you want more (while)!",
        code: `// Runs at least once
let x = 10;
do {
  console.log("x is: " + x);
  x++;
} while (x < 5);
// Shows "x is: 10" even though 10 is not < 5!

// Compare with regular while
let y = 10;
while (y < 5) {
  console.log("y is: " + y);  // This never runs!
  y++;
}

// Useful for user input simulation
let attempts = 0;
do {
  console.log("Try again!");
  attempts++;
} while (attempts < 3);`
      },
      {
        title: "break & continue",
        definition: "'break' stops the loop completely and exits. 'continue' skips the current round and moves to the next one.",
        example: "'break' is like stopping a game completely when you win. 'continue' is like skipping your turn but the game goes on!",
        code: `// Using break - stop when found
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Stopping!");
    break;  // Exit the loop
  }
  console.log(i);
}
// Shows: 1, 2, 3, 4, Found 5! Stopping!

// Using continue - skip certain numbers
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;  // Skip 3
  }
  console.log(i);
}
// Shows: 1, 2, 4, 5 (skips 3)

// Skip even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log(i + " is odd");
}`
      },
      {
        title: "Nested Loops",
        definition: "A nested loop is a loop inside another loop! The inner loop completes all its rounds for each round of the outer loop.",
        example: "Like a clock - for every hour (outer loop), the minute hand goes around 60 times (inner loop)!",
        code: `// Print a pattern
for (let i = 1; i <= 3; i++) {
  console.log("Outer loop: " + i);
  for (let j = 1; j <= 3; j++) {
    console.log("  Inner loop: " + j);
  }
}

// Multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " × " + j + " = " + (i * j));
  }
}

// Create a grid pattern
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += "* ";
  }
  console.log(line);
}
// Shows:
// * * *
// * * *
// * * *`
      }
    ]
  },
  {
    title: "Functions",
    description: "The reusable building blocks.",
    topics: [
      {
        title: "Function Declaration",
        definition: "A function is a reusable block of code that performs a task. You create (declare) it once and can use it many times!",
        example: "Like a recipe - write it once, use it whenever you want to make that dish!",
        code: `// Creating a function
function sayHello() {
  console.log("Hello, friend! 👋");
}

// Using the function
sayHello();  // Shows: Hello, friend! 👋
sayHello();  // Can use it again!

// Function with a task
function celebrateBirthday() {
  console.log("🎉 Happy Birthday!");
  console.log("🎂 Make a wish!");
  console.log("🎈 Party time!");
}

celebrateBirthday();`
      },
      {
        title: "Parameters & Arguments",
        definition: "Parameters are like blank spaces in a function that you fill in when you use it. Arguments are the actual values you provide!",
        example: "Like a greeting card template with a blank for the name - the blank is the parameter, and 'Alex' is the argument you write in!",
        code: `// Function with parameters
function greet(name) {
  console.log("Hello, " + name + "! 😊");
}

// Using with arguments
greet("Alex");     // Hello, Alex! 😊
greet("Sam");      // Hello, Sam! 😊
greet("Jordan");   // Hello, Jordan! 😊

// Multiple parameters
function addNumbers(a, b) {
  let sum = a + b;
  console.log(a + " + " + b + " = " + sum);
}

addNumbers(5, 3);   // 5 + 3 = 8
addNumbers(10, 20); // 10 + 20 = 30

// Fun example
function createStory(hero, villain) {
  console.log(hero + " defeated " + villain + "!");
}

createStory("Superman", "Lex Luthor");`
      },
      {
        title: "Return Statement",
        definition: "The 'return' statement sends a value back from the function. It's like getting an answer from a calculator!",
        example: "Like asking a friend to calculate something and they give you the answer back!",
        code: `// Function that returns a value
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("The answer is: " + result);  // 8

// Using return value directly
console.log(add(10, 20));  // 30

// Function with decision
function isOldEnough(age) {
  if (age >= 13) {
    return "You can have social media!";
  } else {
    return "Wait a few more years!";
  }
}

console.log(isOldEnough(10));  // Wait a few more years!
console.log(isOldEnough(14));  // You can have social media!

// Math function
function square(number) {
  return number * number;
}

console.log(square(5));   // 25
console.log(square(10));  // 100`
      },
      {
        title: "Arrow Functions",
        definition: "Arrow functions are a shorter way to write functions using =>. They're like function shortcuts!",
        example: "Like writing 'thanks' instead of 'thank you very much' - shorter but means the same thing!",
        code: `// Regular function
function sayHi(name) {
  return "Hi, " + name;
}

// Arrow function - shorter!
const sayHello = (name) => {
  return "Hello, " + name;
};

// Even shorter (one line)
const greet = (name) => "Hey, " + name;

console.log(greet("Alex"));  // Hey, Alex

// Arrow function with math
const double = (num) => num * 2;
console.log(double(5));  // 10

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 7));  // 10

// No parameters
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());`
      },
      {
        title: "Default Parameters",
        definition: "Default parameters give a parameter a backup value in case you don't provide one. It's like a safety net!",
        example: "Like ordering a sandwich - if you don't say what bread you want, they give you white bread by default!",
        code: `// Function with default parameter
function greet(name = "friend") {
  console.log("Hello, " + name + "!");
}

greet("Alex");    // Hello, Alex!
greet();          // Hello, friend! (uses default)

// Multiple defaults
function createProfile(name = "User", age = 10, country = "USA") {
  console.log(name + " is " + age + " years old from " + country);
}

createProfile("Sam", 12, "Canada");  // Sam is 12 years old from Canada
createProfile("Alex");                // Alex is 10 years old from USA
createProfile();                      // User is 10 years old from USA

// Useful for math
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 3));  // 15
console.log(multiply(5));     // 5 (uses default b = 1)`
      },
      {
        title: "Callback Functions",
        definition: "A callback is a function that you pass to another function. The other function will 'call it back' when it's ready!",
        example: "Like giving your phone number to a friend and saying 'call me back when you get home' - you give them the way to contact you, they use it later!",
        code: `// Simple callback example
function doHomework(subject, callback) {
  console.log("Starting " + subject + " homework...");
  callback();
}

function finished() {
  console.log("Homework done! Time to play! 🎮");
}

doHomework("math", finished);

// Callback with arrow function
doHomework("reading", () => {
  console.log("All done! 📚");
});

// Callback with parameters
function calculate(a, b, operation) {
  let result = operation(a, b);
  console.log("Result: " + result);
}

calculate(5, 3, (x, y) => x + y);  // Result: 8
calculate(5, 3, (x, y) => x * y);  // Result: 15`
      }
    ]
  },
  {
    title: "Arrays",
    description: "JavaScript's favorite container.",
    topics: [
      {
        title: "Creating & Using Arrays",
        definition: "An array is a special variable that can hold multiple values in order, like a list. Each item has a position number (index) starting from 0!",
        example: "Like a playlist of songs, a shopping list, or a lineup of your favorite toys - arrays keep things in order!",
        code: `// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, "world"];

// Accessing items (index starts at 0!)
console.log(fruits[0]);  // "apple" (first item)
console.log(fruits[1]);  // "banana" (second item)
console.log(fruits[2]);  // "orange" (third item)

// Changing items
fruits[1] = "grape";
console.log(fruits);  // ["apple", "grape", "orange"]

// Array length
console.log(fruits.length);  // 3 items

// Last item trick
console.log(fruits[fruits.length - 1]);  // "orange"`
      },
      {
        title: "Array Methods - Adding & Removing",
        definition: "Arrays have special commands (methods) to add or remove items. push/pop work on the end, shift/unshift work on the beginning!",
        example: "Like a line of people - push adds to the back, unshift adds to the front, pop removes from back, shift removes from front!",
        code: `let toys = ["car", "doll", "ball"];

// push - add to end
toys.push("robot");
console.log(toys);  // ["car", "doll", "ball", "robot"]

// pop - remove from end
let removed = toys.pop();
console.log(removed);  // "robot"
console.log(toys);     // ["car", "doll", "ball"]

// unshift - add to beginning
toys.unshift("puzzle");
console.log(toys);  // ["puzzle", "car", "doll", "ball"]

// shift - remove from beginning
let first = toys.shift();
console.log(first);  // "puzzle"
console.log(toys);   // ["car", "doll", "ball"]`
      },
      {
        title: "Array Methods - slice & splice",
        definition: "slice copies a portion of an array without changing it. splice can add, remove, or replace items IN the array (it changes it!)",
        example: "slice is like taking a photo of part of your toy collection. splice is like actually rearranging the toys on your shelf!",
        code: `let colors = ["red", "blue", "green", "yellow", "purple"];

// slice - copy part (doesn't change original)
let someColors = colors.slice(1, 3);
console.log(someColors);  // ["blue", "green"]
console.log(colors);      // Still all 5 colors

// splice - change the array
// Remove 2 items starting at index 1
let removed = colors.splice(1, 2);
console.log(removed);  // ["blue", "green"]
console.log(colors);   // ["red", "yellow", "purple"]

// Add items with splice
colors.splice(1, 0, "orange", "pink");
console.log(colors);  // ["red", "orange", "pink", "yellow", "purple"]

// Replace items
colors.splice(1, 2, "black");
console.log(colors);  // ["red", "black", "yellow", "purple"]`
      },
      {
        title: "Array Methods - Others",
        definition: "More useful array methods: concat joins arrays, join makes a string, indexOf finds positions, includes checks if something exists!",
        example: "Like tools in a toolbox - each method helps you do something different with your arrays!",
        code: `let fruits = ["apple", "banana", "orange"];
let veggies = ["carrot", "broccoli"];

// concat - combine arrays
let food = fruits.concat(veggies);
console.log(food);  
// ["apple", "banana", "orange", "carrot", "broccoli"]

// join - make a string
let fruitString = fruits.join(", ");
console.log(fruitString);  // "apple, banana, orange"

// indexOf - find position
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.indexOf("grape"));   // -1 (not found)

// includes - check if exists
console.log(fruits.includes("apple"));  // true
console.log(fruits.includes("grape"));  // false

// reverse - flip the order
fruits.reverse();
console.log(fruits);  // ["orange", "banana", "apple"]`
      },
      {
        title: "Looping Through Arrays",
        definition: "You can use loops to go through each item in an array one by one. It's the most common use of loops!",
        example: "Like checking each present under a Christmas tree one at a time!",
        code: `let animals = ["dog", "cat", "bird", "fish"];

// Using for loop
for (let i = 0; i < animals.length; i++) {
  console.log((i + 1) + ". " + animals[i]);
}
// 1. dog
// 2. cat
// 3. bird
// 4. fish

// Using for...of loop (easier!)
for (let animal of animals) {
  console.log("I have a " + animal);
}

// forEach method
animals.forEach((animal, index) => {
  console.log("Animal #" + (index + 1) + ": " + animal);
});`
      }
    ]
  },
  {
    title: "Objects",
    description: "Where data gets structured.",
    topics: [
      {
        title: "Creating & Using Objects",
        definition: "Objects store related information together using key-value pairs. Each piece of information has a name (key) and a value!",
        example: "Like a ID card that has your name, age, grade, and favorite color - all information about YOU in one place!",
        code: `// Creating an object
let student = {
  name: "Alex",
  age: 10,
  grade: 5,
  favoriteSubject: "Math"
};

// Accessing properties - dot notation
console.log(student.name);  // "Alex"
console.log(student.age);   // 10

// Accessing properties - bracket notation
console.log(student["grade"]);  // 5

// Useful when key has spaces or is in a variable
let key = "favoriteSubject";
console.log(student[key]);  // "Math"

// Real example
let myPet = {
  name: "Buddy",
  type: "dog",
  age: 3,
  color: "brown"
};

console.log(myPet.name + " is a " + myPet.color + " " + myPet.type);
// "Buddy is a brown dog"`
      },
      {
        title: "Adding, Updating, Deleting Properties",
        definition: "You can change objects after creating them! Add new properties, update existing ones, or delete properties you don't need.",
        example: "Like updating your profile - you can add a new hobby, change your favorite color, or remove old information!",
        code: `let character = {
  name: "Hero",
  level: 1,
  power: "speed"
};

// Adding new property
character.weapon = "sword";
character["score"] = 0;
console.log(character);
// { name: "Hero", level: 1, power: "speed", weapon: "sword", score: 0 }

// Updating existing property
character.level = 2;
character.score = 100;
console.log(character.level);  // 2

// Deleting property
delete character.weapon;
console.log(character);
// { name: "Hero", level: 2, power: "speed", score: 100 }`
      },
      {
        title: "Object Methods",
        definition: "Objects can have functions inside them called methods! They're actions the object can perform.",
        example: "Like a robot toy that has buttons - each button (method) makes it do something different!",
        code: `let dog = {
  name: "Max",
  age: 3,
  
  // Methods (functions in objects)
  bark: function() {
    console.log("Woof! Woof! 🐕");
  },
  
  introduce: function() {
    console.log("Hi! I'm " + this.name + " and I'm " + this.age + " years old!");
  },
  
  // Shorter way to write methods
  celebrate() {
    console.log(this.name + " is doing a happy dance! 🎉");
  }
};

// Using methods
dog.bark();         // Woof! Woof! 🐕
dog.introduce();    // Hi! I'm Max and I'm 3 years old!
dog.celebrate();    // Max is doing a happy dance! 🎉`
      },
      {
        title: "this Keyword",
        definition: "Inside an object's method, 'this' refers to the object itself. It's like saying 'my own' or 'this object's' property!",
        example: "Like when you say 'my name' instead of saying your name - 'this' refers to the current object!",
        code: `let player = {
  name: "Sam",
  score: 0,
  lives: 3,
  
  addPoints: function(points) {
    this.score = this.score + points;
    console.log(this.name + " now has " + this.score + " points!");
  },
  
  loseLife: function() {
    this.lives--;
    if (this.lives > 0) {
      console.log(this.lives + " lives remaining!");
    } else {
      console.log("Game Over!");
    }
  }
};

player.addPoints(10);  // Sam now has 10 points!
player.addPoints(25);  // Sam now has 35 points!
player.loseLife();     // 2 lives remaining!`
      },
      {
        title: "Nested Objects",
        definition: "Objects can contain other objects inside them! It's like boxes within boxes, organizing related information together.",
        example: "Like a backpack (object) that contains a pencil case (another object), which contains pencils and erasers (more properties)!",
        code: `let school = {
  name: "Sunny Elementary",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "12345"
  },
  principal: {
    name: "Ms. Johnson",
    age: 45,
    office: "Room 101"
  }
};

// Accessing nested properties
console.log(school.name);  // "Sunny Elementary"
console.log(school.address.city);  // "Springfield"
console.log(school.principal.name);  // "Ms. Johnson"

// Another example
let user = {
  username: "alex123",
  profile: {
    firstName: "Alex",
    lastName: "Smith",
    hobbies: ["gaming", "reading", "soccer"]
  }
};

console.log(user.profile.firstName);  // "Alex"
console.log(user.profile.hobbies[0]);  // "gaming"`
      }
    ]
  },
  {
    title: "Strings & Numbers",
    description: "Polishing text and numbers.",
    topics: [
      {
        title: "String Methods - Basics",
        definition: "Strings have built-in methods to work with text. You can change case, get length, and extract parts!",
        example: "Like text editing tools - making text bigger or smaller, copying parts, or counting letters!",
        code: `let message = "Hello, World!";

// Length - count characters
console.log(message.length);  // 13

// Change case
console.log(message.toUpperCase());  // "HELLO, WORLD!"
console.log(message.toLowerCase());  // "hello, world!"

let name = "  Alex  ";
// Remove spaces from start and end
console.log(name.trim());  // "Alex"

// Check if string includes something
console.log(message.includes("World"));  // true
console.log(message.includes("Bye"));    // false

// Check how string starts or ends
console.log(message.startsWith("Hello"));  // true
console.log(message.endsWith("!"));        // true`
      },
      {
        title: "String Methods - Extracting",
        definition: "You can get parts of a string using slice, substring, or charAt. It's like cutting a piece of a ribbon!",
        example: "Like cutting a sandwich - you can take a slice from the middle, from the start, or just one bite!",
        code: `let text = "JavaScript is awesome!";

// charAt - get one character
console.log(text.charAt(0));   // "J"
console.log(text.charAt(4));   // "S"

// slice - get a portion
console.log(text.slice(0, 10));   // "JavaScript"
console.log(text.slice(14));      // "awesome!"
console.log(text.slice(-8));      // "awesome!" (from end)

// substring - similar to slice
console.log(text.substring(0, 10));  // "JavaScript"

// split - break into array
let words = text.split(" ");
console.log(words);  // ["JavaScript", "is", "awesome!"]

let letters = "a,b,c,d".split(",");
console.log(letters);  // ["a", "b", "c", "d"]`
      },
      {
        title: "String Methods - Changing",
        definition: "Methods to replace text, repeat it, or add padding. Remember: strings don't change - these methods create NEW strings!",
        example: "Like making a copy of your homework with corrections - the original stays the same, you get a new version!",
        code: `let sentence = "I love cats. Cats are cute.";

// replace - change first match
console.log(sentence.replace("cats", "dogs"));
// "I love dogs. Cats are cute."

// replaceAll - change all matches
console.log(sentence.replaceAll("cats", "dogs"));
console.log(sentence.replaceAll("Cats", "Dogs"));
// "I love dogs. Dogs are cute."

// repeat - repeat text
console.log("Ha".repeat(3));  // "HaHaHa"
console.log("🎉".repeat(5));  // "🎉🎉🎉🎉🎉"

// padStart - add padding to start
let num = "5";
console.log(num.padStart(3, "0"));  // "005"

// padEnd - add padding to end
console.log(num.padEnd(3, "0"));  // "500"`
      },
      {
        title: "Template Literals",
        definition: "Template literals use backticks (`) and let you insert variables directly into strings using ${variable}. They also allow multi-line strings!",
        example: "Like Mad Libs - a story with blanks that you fill in with words!",
        code: `let name = "Alex";
let age = 10;
let hobby = "coding";

// Old way
console.log("My name is " + name + " and I'm " + age);

// Template literal way (easier!)
console.log(\`My name is \${name} and I'm \${age}\`);

// With calculations
let a = 5;
let b = 3;
console.log(\`\${a} + \${b} = \${a + b}\`);  // "5 + 3 = 8"

// Multi-line strings
let story = \`Once upon a time,
there was a kid named \${name}.
They loved \${hobby} and was \${age} years old.
The end!\`;

console.log(story);

// Practical use
let score = 95;
console.log(\`Your score: \${score}% - \${score >= 90 ? "Excellent!" : "Good!"}\`);`
      },
      {
        title: "Number Methods & Math Object",
        definition: "Numbers have methods too! Plus JavaScript has a Math object with useful functions for calculations and random numbers!",
        example: "Like a super calculator with special buttons for rounding, random numbers, and fancy math!",
        code: `// Number methods
let num = 3.14159;

// Convert to string
console.log(num.toString());  // "3.14159"

// Fixed decimal places
console.log(num.toFixed(2));  // "3.14"

// Math object methods
console.log(Math.round(4.7));   // 5 (round to nearest)
console.log(Math.round(4.4));   // 4
console.log(Math.floor(4.9));   // 4 (round down)
console.log(Math.ceil(4.1));    // 5 (round up)

// Random number (0 to 0.999...)
console.log(Math.random());

// Random number from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Random number from 1 to 6 (like a dice)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + dice);

// Other useful Math methods
console.log(Math.max(5, 10, 3, 8));  // 10 (biggest)
console.log(Math.min(5, 10, 3, 8));  // 3 (smallest)
console.log(Math.pow(2, 3));         // 8 (2 to power of 3)
console.log(Math.sqrt(16));          // 4 (square root)`
      }
    ]
  },
  {
    title: "Date & Time",
    description: "Making JavaScript time-aware.",
    topics: [
      {
        title: "Date Object Basics",
        definition: "The Date object helps you work with dates and times. You can get the current date/time or create specific dates!",
        example: "Like a calendar and clock combined - it knows what day it is and what time it is!",
        code: `// Current date and time
let now = new Date();
console.log(now);  // Full date and time

// Specific date (month is 0-11, so 0 = January!)
let birthday = new Date(2014, 0, 15);  // Jan 15, 2014
console.log(birthday);

// From a string
let christmas = new Date("2024-12-25");
console.log(christmas);

// Get parts of the date
let today = new Date();
console.log(today.getFullYear());   // 2024
console.log(today.getMonth());      // 0-11 (0 = Jan)
console.log(today.getDate());       // Day of month (1-31)
console.log(today.getDay());        // Day of week (0-6, 0 = Sunday)
console.log(today.getHours());      // Hour (0-23)
console.log(today.getMinutes());    // Minutes (0-59)
console.log(today.getSeconds());    // Seconds (0-59)`
      },
      {
        title: "Setting & Formatting Dates",
        definition: "You can change parts of a date and format it to display the way you want!",
        example: "Like setting an alarm clock - you can change the hour, minute, or even the whole date!",
        code: `let date = new Date();

// Setting parts of the date
date.setFullYear(2025);
date.setMonth(11);  // December (remember 0-11!)
date.setDate(25);
console.log(date);  // Dec 25, 2025

// Creating a nice format
let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;  // Add 1 because it's 0-11
let year = now.getFullYear();

console.log(\`Today is \${month}/\${day}/\${year}\`);

// Get day name
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday"];
let dayName = days[now.getDay()];
console.log("Today is " + dayName);

// Get month name
let months = ["January", "February", "March", "April", "May", 
              "June", "July", "August", "September", "October", 
              "November", "December"];
let monthName = months[now.getMonth()];
console.log("Current month: " + monthName);`
      },
      {
        title: "Timers - setTimeout",
        definition: "setTimeout runs code once after waiting a certain number of milliseconds (1000 ms = 1 second). It's like setting a timer!",
        example: "Like a kitchen timer - set it for 3 seconds, and when time's up, it beeps (runs your code)!",
        code: `// Run code after 2 seconds
setTimeout(() => {
  console.log("2 seconds have passed! ⏰");
}, 2000);

// Countdown example
console.log("Starting countdown...");
setTimeout(() => {
  console.log("3...");
}, 1000);
setTimeout(() => {
  console.log("2...");
}, 2000);
setTimeout(() => {
  console.log("1...");
}, 3000);
setTimeout(() => {
  console.log("Blast off! 🚀");
}, 4000);

// With a function
function showMessage() {
  console.log("Time's up! ⏱️");
}

setTimeout(showMessage, 3000);  // After 3 seconds

// Cancel a timeout
let timer = setTimeout(() => {
  console.log("This won't run!");
}, 5000);

clearTimeout(timer);  // Cancel it!`
      },
      {
        title: "Timers - setInterval",
        definition: "setInterval runs code repeatedly at a regular interval (every X milliseconds). It keeps going until you stop it!",
        example: "Like a heartbeat or a clock ticking - it happens over and over at regular intervals!",
        code: `// Run every 2 seconds
let counter = 0;
let interval = setInterval(() => {
  counter++;
  console.log("Counter: " + counter);
}, 2000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped!");
}, 10000);

// Clock example
let clockInterval = setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  console.log(\`\${hours}:\${minutes}:\${seconds}\`);
}, 1000);

// Countdown timer
let countdown = 10;
let countdownInterval = setInterval(() => {
  console.log(countdown);
  countdown--;
  
  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Done! 🎉");
  }
}, 1000);`
      }
    ]
  },
  {
    title: "DOM (Document Object Model)",
    description: "Where JavaScript talks to the web page.",
    topics: [
      {
        title: "What is DOM?",
        definition: "The DOM is how JavaScript sees and controls a web page. It's like a map of all the elements (buttons, text, images) on the page that JavaScript can change!",
        example: "Imagine your web page is a toy room. The DOM is like a list of all the toys and where they are. JavaScript can use this list to move toys around, change them, or add new ones!",
        code: `// The DOM represents your HTML in JavaScript
// HTML: <h1 id="title">Hello World</h1>

// JavaScript can find and change it
let title = document.getElementById("title");
title.textContent = "Hello JavaScript!";

// Structure example
// document
//   └── html
//       ├── head
//       │   └── title
//       └── body
//           ├── h1
//           ├── p
//           └── button`
      },
      {
        title: "Selecting Elements",
        definition: "Before you can change something on the page, you need to find it! There are different ways to select elements using their id, class, or tag name.",
        example: "Like finding a specific book in a library - you can search by its title (id), category (class), or type (tag)!",
        code: `// By ID (most specific, only one element)
let header = document.getElementById("main-header");

// By class (can select multiple elements)
let buttons = document.getElementsByClassName("btn");

// By tag name (all elements of that type)
let paragraphs = document.getElementsByTagName("p");

// querySelector (uses CSS selectors, returns first match)
let firstButton = document.querySelector(".btn");
let mainTitle = document.querySelector("#title");

// querySelectorAll (returns all matches)
let allButtons = document.querySelectorAll(".btn");
let allParagraphs = document.querySelectorAll("p");

// Examples
let element = document.querySelector(".my-class");
let items = document.querySelectorAll("li");  // All list items`
      },
      {
        title: "Changing Content & Styles",
        definition: "Once you've selected an element, you can change its text, HTML content, or CSS styles using JavaScript!",
        example: "Like redecorating your room - you can change the posters (content), paint the walls (styles), or rearrange furniture (structure)!",
        code: `// Change text content
let heading = document.querySelector("h1");
heading.textContent = "New Title!";

// Change HTML (can include tags)
let div = document.querySelector(".container");
div.innerHTML = "<p>New <strong>HTML</strong> content!</p>";

// Change styles
let box = document.querySelector(".box");
box.style.color = "blue";
box.style.backgroundColor = "yellow";
box.style.fontSize = "24px";
box.style.padding = "20px";

// Change multiple styles
box.style.cssText = "color: red; background: blue; padding: 10px;";

// Add/remove classes
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("highlight");  // Add if not there, remove if there

// Change attributes
let img = document.querySelector("img");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "A cool picture");`
      },
      {
        title: "Creating & Removing Elements",
        definition: "JavaScript can create brand new elements and add them to the page, or remove existing ones! It's like building with blocks.",
        example: "Like adding new LEGO pieces to your build or taking some away - JavaScript can add and remove parts of the web page!",
        code: `// Create a new element
let newParagraph = document.createElement("p");
newParagraph.textContent = "I'm a new paragraph!";
newParagraph.className = "my-class";

// Add it to the page
document.body.appendChild(newParagraph);

// Or add to a specific parent
let container = document.querySelector(".container");
container.appendChild(newParagraph);

// Create a button
let button = document.createElement("button");
button.textContent = "Click Me!";
button.id = "my-button";
container.appendChild(button);

// Remove an element
let oldElement = document.querySelector(".old");
oldElement.remove();

// Or remove child from parent
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
parent.removeChild(child);

// Replace an element
let newElement = document.createElement("div");
newElement.textContent = "New content";
let oldEl = document.querySelector(".old");
oldEl.replaceWith(newElement);`
      },
      {
        title: "DOM Traversal",
        definition: "DOM traversal means moving around the DOM tree - going from one element to its parent, children, or siblings!",
        example: "Like a family tree - you can go from a child to their parent, to their siblings, or to their own children!",
        code: `// HTML structure:
// <div class="parent">
//   <h1>Title</h1>
//   <p>Paragraph 1</p>
//   <p>Paragraph 2</p>
// </div>

let paragraph = document.querySelector("p");

// Get parent element
let parent = paragraph.parentElement;
console.log(parent);  // The div

// Get children
let children = parent.children;
console.log(children);  // All child elements

// Get first and last child
let firstChild = parent.firstElementChild;  // h1
let lastChild = parent.lastElementChild;    // last p

// Get siblings
let nextSibling = paragraph.nextElementSibling;  // Next p
let prevSibling = paragraph.previousElementSibling;  // h1

// Practical example
let listItem = document.querySelector("li");
let list = listItem.parentElement;  // Get the ul
let allItems = list.children;  // All li elements`
      }
    ]
  },
  {
    title: "Events",
    description: "Making pages interactive.",
    topics: [
      {
        title: "Event Handling Basics",
        definition: "Events are things that happen on a web page - like clicks, typing, or mouse movement. Event handlers are functions that run when events happen!",
        example: "Like a doorbell - when someone presses it (event), it rings (handler function runs)!",
        code: `// HTML: <button id="myBtn">Click Me</button>

// Method 1: onclick in HTML
// <button onclick="sayHello()">Click Me</button>

// Method 2: onclick property
let btn = document.getElementById("myBtn");
btn.onclick = function() {
  console.log("Button clicked! 🎉");
};

// Method 3: addEventListener (BEST!)
btn.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
btn.addEventListener("click", () => {
  alert("Hello! You clicked the button!");
});

// Named function
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);`
      },
      {
        title: "Mouse Events",
        definition: "Mouse events happen when you use your mouse - clicking, moving, hovering, etc. Each type of mouse action has its own event!",
        example: "Like different ways to play with a toy - you can click it, hover over it, drag it, or double-click it!",
        code: `let box = document.querySelector(".box");

// Click events
box.addEventListener("click", () => {
  console.log("Single click!");
});

box.addEventListener("dblclick", () => {
  console.log("Double click!");
});

// Mouse movement
box.addEventListener("mouseenter", () => {
  console.log("Mouse entered!");
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse left!");
  box.style.backgroundColor = "white";
});

box.addEventListener("mousemove", (e) => {
  console.log(\`Mouse at X: \${e.clientX}, Y: \${e.clientY}\`);
});

// Mouse buttons
box.addEventListener("mousedown", () => {
  console.log("Mouse button pressed!");
});

box.addEventListener("mouseup", () => {
  console.log("Mouse button released!");
});`
      },
      {
        title: "Keyboard Events",
        definition: "Keyboard events happen when you press, hold, or release keys on your keyboard. You can detect which key was pressed!",
        example: "Like playing a piano - each key you press makes something happen!",
        code: `// Listen on the whole document
document.addEventListener("keydown", (e) => {
  console.log("Key pressed: " + e.key);
});

document.addEventListener("keyup", (e) => {
  console.log("Key released: " + e.key);
});

// Detect specific keys
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("You pressed Enter!");
  }
  if (e.key === " ") {
    console.log("You pressed Space!");
  }
  if (e.key === "ArrowUp") {
    console.log("You pressed Up Arrow!");
  }
});

// Fun game controls
document.addEventListener("keydown", (e) => {
  switch(e.key) {
    case "w":
      console.log("Move up!");
      break;
    case "s":
      console.log("Move down!");
      break;
    case "a":
      console.log("Move left!");
      break;
    case "d":
      console.log("Move right!");
      break;
  }
});`
      },
      {
        title: "Form Events",
        definition: "Form events happen when you interact with form elements like inputs, selects, and forms themselves - typing, focusing, submitting!",
        example: "Like filling out a worksheet - events happen when you start writing, finish a question, or turn in the whole worksheet!",
        code: `// HTML: <input type="text" id="nameInput">

let input = document.getElementById("nameInput");

// When user types
input.addEventListener("input", (e) => {
  console.log("Current value: " + e.target.value);
});

// When user finishes typing (leaves the field)
input.addEventListener("change", (e) => {
  console.log("Final value: " + e.target.value);
});

// When field gets focus
input.addEventListener("focus", () => {
  console.log("Input is focused!");
  input.style.backgroundColor = "lightblue";
});

// When field loses focus
input.addEventListener("blur", () => {
  console.log("Input lost focus!");
  input.style.backgroundColor = "white";
});

// Form submission
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();  // Stop page reload!
  console.log("Form submitted!");
  // Process form data here
});`
      },
      {
        title: "Event Object & preventDefault",
        definition: "When an event happens, JavaScript creates an event object with information about it. preventDefault() stops the default action from happening!",
        example: "Like catching a ball (event object has info about the ball) and deciding not to throw it back (preventDefault)!",
        code: `// Event object has useful info
button.addEventListener("click", (event) => {
  console.log(event.type);        // "click"
  console.log(event.target);      // Element that was clicked
  console.log(event.clientX);     // Mouse X position
  console.log(event.clientY);     // Mouse Y position
});

// preventDefault - stop default behavior
let link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();  // Don't follow the link!
  console.log("Link click prevented!");
});

// Prevent form from refreshing page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form won't reload the page!");
  // Handle form data with JavaScript instead
});

// Prevent right-click menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Right-click disabled!");
});`
      }
    ]
  },
  {
    title: "Advanced Functions & Scope",
    description: "JavaScript's brainpower upgrade.",
    topics: [
      {
        title: "Scope (Global, Local, Block)",
        definition: "Scope is where variables can be used. Global scope = everywhere, Local scope = inside a function, Block scope = inside { curly braces }!",
        example: "Like your toys - some are in your room (local), some are in the whole house (global), some are just in your closet (block)!",
        code: `// Global scope - accessible everywhere
let globalVar = "I'm global!";

function myFunction() {
  // Local (function) scope
  let localVar = "I'm local!";
  console.log(globalVar);  // Can access global ✓
  console.log(localVar);   // Can access local ✓
}

myFunction();
console.log(globalVar);  // Can access global ✓
// console.log(localVar);   // ERROR! Can't access local ✗

// Block scope (with let and const)
if (true) {
  let blockVar = "I'm in a block!";
  console.log(blockVar);  // Works ✓
}
// console.log(blockVar);  // ERROR! Can't access outside block ✗

// var doesn't have block scope (that's why we avoid it!)
if (true) {
  var oldVar = "I escape blocks!";
}
console.log(oldVar);  // Works! (but confusing)`
      },
      {
        title: "Hoisting",
        definition: "Hoisting is JavaScript's behavior of moving declarations to the top before running code. Functions get hoisted completely, but variables only their declarations!",
        example: "Like organizing your backpack before school - JavaScript reorganizes some code before running it!",
        code: `// You can call function before declaring it!
sayHi();  // Works! ✓

function sayHi() {
  console.log("Hello!");
}

// Variable hoisting is trickier
console.log(myVar);  // undefined (not an error!)
var myVar = 5;
// JavaScript sees it as:
// var myVar;           // Declaration hoisted
// console.log(myVar);  // undefined
// myVar = 5;           // Assignment stays here

// let and const DON'T work like this
// console.log(myLet);  // ERROR! ✗
let myLet = 10;

// Best practice: declare variables at the top!
let name;
let age;
let score;

name = "Alex";
age = 10;
score = 100;`
      },
      {
        title: "Closures",
        definition: "A closure is when a function remembers variables from where it was created, even after that outer function is done running!",
        example: "Like a backpack - even when you leave home (outer function ends), your backpack still has your stuff (remembers variables)!",
        code: `// Simple closure
function outer() {
  let message = "Hello";
  
  function inner() {
    console.log(message);  // Can access message!
  }
  
  return inner;
}

let myFunction = outer();
myFunction();  // "Hello" - remembers message!

// Practical example - private counter
function createCounter() {
  let count = 0;  // Private variable!
  
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

let counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.decrement();  // 1
console.log(counter.getCount());  // 1
// Can't access count directly - it's private!`
      },
      {
        title: "Higher-Order Functions",
        definition: "Higher-order functions either take other functions as arguments OR return a function. They're like function managers!",
        example: "Like a coach who tells players what to do - the coach (higher-order function) gives instructions (other functions) to players!",
        code: `// Function that takes another function
function doTwice(func) {
  func();
  func();
}

function sayHello() {
  console.log("Hello!");
}

doTwice(sayHello);  // "Hello!" "Hello!"

// Function that returns a function
function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Array methods are higher-order functions!
let numbers = [1, 2, 3, 4, 5];

// map - transform each item
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep items that pass test
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// forEach - do something with each item
numbers.forEach(num => console.log(num * 2));`
      }
    ]
  },
  {
    title: "ES6+ Modern JavaScript",
    description: "The modern wardrobe upgrade.",
    topics: [
      {
        title: "Destructuring",
        definition: "Destructuring is a quick way to unpack values from arrays or properties from objects into separate variables!",
        example: "Like unpacking a lunch box - instead of taking out each item one by one, you can grab them all at once!",
        code: `// Array destructuring
let colors = ["red", "green", "blue"];

// Old way
let color1 = colors[0];
let color2 = colors[1];

// New way - destructuring!
let [first, second, third] = colors;
console.log(first);   // "red"
console.log(second);  // "green"

// Skip values
let [primary, , tertiary] = colors;
console.log(primary);   // "red"
console.log(tertiary);  // "blue"

// Object destructuring
let person = {
  name: "Alex",
  age: 10,
  hobby: "coding"
};

// Old way
let name = person.name;
let age = person.age;

// New way!
let { name, age, hobby } = person;
console.log(name);  // "Alex"
console.log(age);   // 10

// Rename variables
let { name: userName, age: userAge } = person;
console.log(userName);  // "Alex"`
      },
      {
        title: "Spread & Rest Operators",
        definition: "Spread (...) expands an array/object. Rest (...) collects multiple values into an array. Same syntax, different use!",
        example: "Spread is like dumping out all your LEGO pieces. Rest is like gathering them all back into a bucket!",
        code: `// SPREAD - expand array
let fruits = ["apple", "banana"];
let moreFruits = ["orange", ...fruits, "grape"];
console.log(moreFruits);  
// ["orange", "apple", "banana", "grape"]

// Copy array
let numbers = [1, 2, 3];
let numbersCopy = [...numbers];

// Spread in function
function add(a, b, c) {
  return a + b + c;
}
let nums = [1, 2, 3];
console.log(add(...nums));  // 6

// Spread object
let person = { name: "Alex", age: 10 };
let personWithHobby = { ...person, hobby: "coding" };
console.log(personWithHobby);
// { name: "Alex", age: 10, hobby: "coding" }

// REST - collect into array
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15`
      },
      {
        title: "Optional Chaining & Nullish Coalescing",
        definition: "Optional chaining (?.) safely accesses nested properties. Nullish coalescing (??) provides default values only for null/undefined!",
        example: "Like checking if a box exists before opening it (optional chaining), and having a backup gift ready if it's empty (nullish coalescing)!",
        code: `// Without optional chaining
let user = { name: "Alex" };

// This would crash if user.address doesn't exist!
// let city = user.address.city;  // ERROR!

// With optional chaining - safe!
let city = user?.address?.city;
console.log(city);  // undefined (no error!)

// Real example
let person = {
  name: "Sam",
  pet: {
    name: "Buddy",
    type: "dog"
  }
};

console.log(person?.pet?.name);  // "Buddy"
console.log(person?.car?.brand); // undefined (safe!)

// Nullish Coalescing (??)
let score = 0;

// Old way - wrong!
let display = score || "No score";
console.log(display);  // "No score" (0 is falsy!)

// New way - correct!
let display2 = score ?? "No score";
console.log(display2);  // 0 (only null/undefined use default)

let name = null;
console.log(name ?? "Guest");  // "Guest"

let age = 0;
console.log(age ?? 18);  // 0 (0 is not null/undefined!)`
      },
      {
        title: "Modules (import & export)",
        definition: "Modules let you split code into separate files. Export makes code available to other files, import brings it in!",
        example: "Like having different boxes for different toys - you can take toys from one box (import) or share toys with others (export)!",
        code: `// In file: math.js
// Export single items
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// Or export all at once
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export { multiply, divide };

// Default export (only one per file)
export default function calculate(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  return 0;
}

// In another file: app.js
import calculate from "./math.js";  // Default import
import { add, subtract, PI } from "./math.js";  // Named imports

console.log(add(5, 3));      // 8
console.log(PI);             // 3.14159
console.log(calculate(10, 5, "+")); // 15

// Import everything
import * as MathStuff from "./math.js";
console.log(MathStuff.add(2, 3));  // 5`
      }
    ]
  },
  {
    title: "Asynchronous JavaScript",
    description: "Handling time without freezing the app.",
    topics: [
      {
        title: "Synchronous vs Asynchronous",
        definition: "Synchronous code runs line by line, waiting for each to finish. Asynchronous code can start something and move on while waiting for it to complete!",
        example: "Synchronous is like washing dishes - you finish one before starting the next. Asynchronous is like laundry - you start the washer and do other things while it runs!",
        code: `// SYNCHRONOUS - runs in order
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third (in order)

// ASYNCHRONOUS - doesn't wait!
console.log("First");

setTimeout(() => {
  console.log("Second (after 2 seconds)");
}, 2000);

console.log("Third");
// Output: First, Third, Second (Third doesn't wait!)

// Real example
console.log("Start cooking 🍳");

setTimeout(() => {
  console.log("Food is ready! 🍕");
}, 3000);

console.log("Set the table 🍽️");
console.log("Pour drinks 🥤");
// While food cooks, you can do other things!`
      },
      {
        title: "Promises",
        definition: "A Promise represents something that will complete in the future. It can succeed (resolve) or fail (reject). You use .then() for success and .catch() for errors!",
        example: "Like ordering pizza - you get a promise it will arrive. When it comes (resolve), you eat it (.then). If they mess up (reject), you complain (.catch)!",
        code: `// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Task completed! ✓");
    } else {
      reject("Task failed! ✗");
    }
  }, 2000);
});

// Using the promise
myPromise
  .then((result) => {
    console.log(result);  // If successful
  })
  .catch((error) => {
    console.log(error);   // If failed
  });

// Practical example - delay
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`Waited \${seconds} seconds!\`);
    }, seconds * 1000);
  });
}

wait(2)
  .then((message) => {
    console.log(message);
    return wait(1);  // Chain another promise!
  })
  .then((message) => {
    console.log(message);
  });`
      },
      {
        title: "async / await",
        definition: "async/await makes asynchronous code look synchronous! 'async' marks a function as asynchronous, 'await' waits for a promise to finish.",
        example: "Like waiting in line - 'await' means you stay in line until it's your turn, making the code easier to read!",
        code: `// Old way with promises
function oldWay() {
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// New way with async/await - cleaner!
async function newWay() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Simple example
function delay(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function countdown() {
  console.log("3");
  await delay(1);
  console.log("2");
  await delay(1);
  console.log("1");
  await delay(1);
  console.log("Go! 🚀");
}

countdown();

// Async functions always return a promise
async function getNumber() {
  return 42;
}

getNumber().then(num => console.log(num));  // 42`
      },
      {
        title: "Error Handling with try...catch",
        definition: "try...catch helps handle errors in asynchronous code. Code in 'try' runs normally, 'catch' handles any errors, 'finally' always runs!",
        example: "Like trying to ride a bike - if you fall (error), your friend catches you (catch block), and either way you get back up (finally)!",
        code: `// Basic try...catch
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.log("Oops! Something went wrong:", error);
} finally {
  console.log("This always runs!");
}

// With async/await
async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  } finally {
    console.log("Finished trying to get data");
  }
}

// Multiple operations
async function processData() {
  try {
    console.log("Starting...");
    
    await delay(1);
    console.log("Step 1 complete");
    
    await delay(1);
    console.log("Step 2 complete");
    
    // Simulate an error
    throw new Error("Something went wrong!");
    
  } catch (error) {
    console.log("Caught error:", error.message);
  } finally {
    console.log("Cleanup complete");
  }
}`
      }
    ]
  },
  {
    title: "APIs & AJAX",
    description: "Talking to servers.",
    topics: [
      {
        title: "What is an API? & JSON",
        definition: "API (Application Programming Interface) lets different programs talk to each other. JSON (JavaScript Object Notation) is how data is sent and received - it looks like JavaScript objects!",
        example: "API is like a waiter at a restaurant - you tell them what you want (request), they bring it to you (response). JSON is the menu - it's written in a format everyone understands!",
        code: `// JSON looks like JavaScript objects
let jsonString = '{\"name\": \"Alex\", \"age\": 10, \"hobbies\": [\"coding\", \"gaming\"]}';

// Parse JSON string to JavaScript object
let person = JSON.parse(jsonString);
console.log(person.name);  // "Alex"
console.log(person.hobbies[0]);  // "coding"

// Convert JavaScript object to JSON string
let student = {
  name: "Sam",
  grade: 5,
  subjects: ["Math", "Science"]
};

let json = JSON.stringify(student);
console.log(json);
// {"name":"Sam","grade":5,"subjects":["Math","Science"]}

// Example API response (JSON)
let apiResponse = {
  "weather": "sunny",
  "temperature": 75,
  "city": "Springfield"
};

console.log("It's " + apiResponse.weather + " in " + apiResponse.city);`
      },
      {
        title: "fetch() API",
        definition: "fetch() is JavaScript's modern way to make HTTP requests to get data from servers. It returns a Promise!",
        example: "Like sending a text message to a friend asking for homework answers - fetch sends a request and waits for a reply!",
        code: `// Basic GET request
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// With async/await (easier to read!)
async function getData() {
  try {
    let response = await fetch("https://api.example.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Real example - get a random joke
async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let joke = await response.json();
    console.log(joke.setup);
    console.log(joke.punchline);
  } catch (error) {
    console.log("Couldn't get joke:", error);
  }
}

getJoke();`
      },
      {
        title: "HTTP Methods",
        definition: "HTTP methods tell the server what you want to do: GET (get data), POST (send new data), PUT (update data), DELETE (remove data).",
        example: "Like different actions with your toys: GET (look at them), POST (get a new toy), PUT (paint an old toy), DELETE (give away a toy)!",
        code: `// GET - fetch data (default)
async function getUsers() {
  let response = await fetch("https://api.example.com/users");
  let users = await response.json();
  return users;
}

// POST - send new data
async function createUser(userData) {
  let response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  let result = await response.json();
  return result;
}

// Using POST
let newUser = {
  name: "Alex",
  age: 10,
  email: "alex@example.com"
};

createUser(newUser);

// PUT - update existing data
async function updateUser(id, userData) {
  let response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  return await response.json();
}

// DELETE - remove data
async function deleteUser(id) {
  let response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "DELETE"
  });
  return await response.json();
}`
      },
      {
        title: "Handling API Responses & Errors",
        definition: "When making API requests, you need to check if they succeeded and handle different types of responses and errors properly!",
        example: "Like checking if your online order went through - did it work? Was there an error? Is the item in stock?",
        code: `// Check response status
async function fetchData(url) {
  try {
    let response = await fetch(url);
    
    // Check if request succeeded
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    let data = await response.json();
    return data;
    
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

// Handle different status codes
async function getUserById(id) {
  try {
    let response = await fetch(\`https://api.example.com/users/\${id}\`);
    
    if (response.status === 404) {
      console.log("User not found!");
      return null;
    }
    
    if (response.status === 500) {
      console.log("Server error!");
      return null;
    }
    
    if (response.ok) {
      let user = await response.json();
      return user;
    }
    
  } catch (error) {
    console.log("Network error:", error);
    return null;
  }
}

// Practical example with loading state
async function loadData() {
  console.log("Loading... ⏳");
  
  try {
    let data = await fetchData("https://api.example.com/data");
    
    if (data) {
      console.log("Success! ✓", data);
    } else {
      console.log("Failed to load data ✗");
    }
    
  } catch (error) {
    console.log("Error:", error);
  }
  
  console.log("Done!");
}`
      }
    ]
  },
  {
    title: "Error Handling & Debugging",
    description: "Finding and fixing bugs.",
    topics: [
      {
        title: "Types of Errors",
        definition: "JavaScript has different types of errors: Syntax errors (typos in code), Reference errors (using undeclared variables), Type errors (wrong type of data), and more!",
        example: "Like making mistakes in homework - spelling errors (syntax), using a word you don't know (reference), or using a number where you need a word (type)!",
        code: `// SYNTAX ERROR - typo in code
// console.log("Hello"  // Missing closing )

// REFERENCE ERROR - variable doesn't exist
// console.log(myVariable);  // ReferenceError

// TYPE ERROR - wrong operation for type
// let num = 5;
// num.toUpperCase();  // TypeError (numbers don't have toUpperCase)

// RANGE ERROR - invalid value
// let arr = new Array(-1);  // RangeError (can't have negative length)

// Common mistakes to watch for:
// 1. Spelling mistakes
let nmae = "Alex";  // Typo!
// console.log(name);  // ERROR - it's "nmae" not "name"

// 2. Case sensitivity
let myName = "Alex";
// console.log(myname);  // ERROR - JavaScript is case-sensitive

// 3. Missing quotes
// console.log(Hello);  // ERROR - needs quotes
console.log("Hello");  // Correct!

// 4. Forgetting to close brackets
// function test() {
//   console.log("Hi");
// Missing closing }!`
      },
      {
        title: "try, catch, finally",
        definition: "try lets you test code for errors, catch handles the error if one occurs, finally runs code whether there's an error or not!",
        example: "Like trying to jump rope - TRY to jump, if you trip (error) your friend CATCHES you, and FINALLY you both smile!",
        code: `// Basic try-catch
try {
  // Try to run this code
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  // If error happens, run this
  console.log("Error occurred:", error.message);
}

// With finally
try {
  console.log("Attempting something...");
  throw new Error("Oops!");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("This always runs!");
}

// Practical example
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  } finally {
    console.log("Division attempt complete");
  }
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // null (with error message)

// Multiple catches
try {
  let data = JSON.parse("invalid json");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Invalid JSON format!");
  } else {
    console.log("Other error:", error);
  }
}`
      },
      {
        title: "Custom Errors",
        definition: "You can create your own custom errors with specific messages to help understand what went wrong!",
        example: "Like making your own warning signs - instead of a generic 'STOP', you make one that says 'STOP - Wet Floor'!",
        code: `// Throwing custom errors
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
  if (age > 150) {
    throw new Error("Age seems too high!");
  }
  return true;
}

try {
  checkAge(-5);
} catch (error) {
  console.log("Error:", error.message);
  // "Error: Age cannot be negative!"
}

// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required!");
  }
  if (user.age < 0) {
    throw new ValidationError("Age must be positive!");
  }
  return true;
}

try {
  validateUser({ age: 10 });  // Missing name
} catch (error) {
  console.log(error.name + ":", error.message);
  // "ValidationError: Name is required!"
}

// Practical example
function processData(data) {
  if (!data) {
    throw new Error("No data provided!");
  }
  if (typeof data !== "object") {
    throw new TypeError("Data must be an object!");
  }
  console.log("Processing:", data);
}

try {
  processData(null);
} catch (error) {
  console.log("Failed:", error.message);
}`
      },
      {
        title: "Browser DevTools & Debugging",
        definition: "Browser DevTools are built-in tools that help you find and fix bugs. Use console.log() to print values, debugger to pause code, and breakpoints to inspect!",
        example: "Like a detective's magnifying glass - DevTools help you examine your code closely to find problems!",
        code: `// console methods for debugging
console.log("Normal message");
console.warn("Warning message ⚠️");
console.error("Error message ❌");
console.info("Info message ℹ️");

// Log multiple values
let name = "Alex";
let score = 95;
console.log("Player:", name, "Score:", score);

// Table format for arrays/objects
let students = [
  { name: "Alex", grade: 90 },
  { name: "Sam", grade: 85 }
];
console.table(students);

// Group related logs
console.group("User Details");
console.log("Name: Alex");
console.log("Age: 10");
console.log("Grade: 5");
console.groupEnd();

// Time how long code takes
console.time("myTimer");
for (let i = 0; i < 1000000; i++) {
  // Some operation
}
console.timeEnd("myTimer");  // Shows how long it took

// Debugger - pauses code here
function complexFunction(x) {
  let result = x * 2;
  debugger;  // Code pauses here! (when DevTools open)
  return result + 10;
}

// Assert - only logs if condition is false
let age = 5;
console.assert(age >= 10, "Age should be 10 or more!");

// Clear console
// console.clear();`
      }
    ]
  },
  {
    title: "JavaScript OOP",
    description: "Object-Oriented JavaScript.",
    topics: [
      {
        title: "Classes & Objects",
        definition: "A class is like a blueprint for creating objects. Objects created from a class are called instances. Classes help organize code better!",
        example: "A class is like a cookie cutter - the shape you use to make cookies. Each cookie is an object made from that class!",
        code: `// Creating a class
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  
  bark() {
    console.log(this.name + " says: Woof! Woof! 🐕");
  }
  
  introduce() {
    console.log(\`Hi! I'm \${this.name}, a \${this.age} year old \${this.breed}!\`);
  }
}

// Creating objects (instances) from the class
let dog1 = new Dog("Buddy", "Golden Retriever", 3);
let dog2 = new Dog("Max", "Beagle", 5);

dog1.bark();       // Buddy says: Woof! Woof! 🐕
dog1.introduce();  // Hi! I'm Buddy, a 3 year old Golden Retriever!

dog2.bark();       // Max says: Woof! Woof! 🐕
dog2.introduce();  // Hi! I'm Max, a 5 year old Beagle!

// Another example
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.subjects = [];
  }
  
  addSubject(subject) {
    this.subjects.push(subject);
    console.log(\`Added \${subject} for \${this.name}\`);
  }
}

let student = new Student("Alex", 5);
student.addSubject("Math");
student.addSubject("Science");`
      },
      {
        title: "Inheritance",
        definition: "Inheritance lets one class get properties and methods from another class. The child class extends the parent class and gets all its features!",
        example: "Like how you inherit traits from your parents - you get some features from them, but you're still your own person!",
        code: `// Parent class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    console.log(this.name + " is eating 🍽️");
  }
  
  sleep() {
    console.log(this.name + " is sleeping 😴");
  }
}

// Child class extends parent
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);  // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + " says: Woof! 🐕");
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  
  meow() {
    console.log(this.name + " says: Meow! 🐱");
  }
}

// Using child classes
let dog = new Dog("Buddy", 3, "Golden Retriever");
dog.eat();    // From Animal class ✓
dog.sleep();  // From Animal class ✓
dog.bark();   // From Dog class ✓

let cat = new Cat("Whiskers", 2, "orange");
cat.eat();    // From Animal class ✓
cat.sleep();  // From Animal class ✓
cat.meow();   // From Cat class ✓`
      },
      {
        title: "Encapsulation & Private Fields",
        definition: "Encapsulation means keeping some data private (hidden) inside a class. Use # to make fields private - they can't be accessed from outside!",
        example: "Like your diary with a lock - some things are private and only you can see them!",
        code: `// Public and private fields
class BankAccount {
  // Private field (starts with #)
  #balance = 0;
  
  constructor(owner) {
    this.owner = owner;  // Public
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`Deposited $\${amount}. New balance: $\${this.#balance}\`);
    }
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(\`Withdrew $\${amount}. Remaining: $\${this.#balance}\`);
    } else {
      console.log("Insufficient funds!");
    }
  }
  
  getBalance() {
    return this.#balance;  // Controlled access
  }
}

let account = new BankAccount("Alex");
account.deposit(100);    // Deposited $100. New balance: $100
account.withdraw(30);    // Withdrew $30. Remaining: $70
console.log(account.getBalance());  // 70

// account.#balance = 1000;  // ERROR! Can't access private field
// console.log(account.#balance);  // ERROR!

// Another example
class Player {
  #health = 100;
  
  constructor(name) {
    this.name = name;
  }
  
  takeDamage(damage) {
    this.#health -= damage;
    if (this.#health <= 0) {
      console.log(this.name + " is defeated! 💀");
    }
  }
  
  showHealth() {
    console.log(\`\${this.name}'s health: \${this.#health}\`);
  }
}

let player = new Player("Hero");
player.takeDamage(30);
player.showHealth();  // Hero's health: 70`
      },
      {
        title: "Static Methods & Properties",
        definition: "Static methods and properties belong to the class itself, not to instances. You call them on the class, not on objects!",
        example: "Like a classroom rule that applies to everyone - it belongs to the class (classroom), not to individual students (objects)!",
        code: `class MathHelper {
  // Static property
  static PI = 3.14159;
  
  // Static method
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

// Call on the class, not on an object
console.log(MathHelper.add(5, 3));        // 8
console.log(MathHelper.PI);               // 3.14159
console.log(MathHelper.circleArea(5));    // 78.53975

// Another example
class Player {
  static totalPlayers = 0;
  
  constructor(name) {
    this.name = name;
    Player.totalPlayers++;  // Increment class variable
  }
  
  static getPlayerCount() {
    return \`Total players: \${this.totalPlayers}\`;
  }
}

let p1 = new Player("Alex");
let p2 = new Player("Sam");
let p3 = new Player("Jordan");

console.log(Player.getPlayerCount());  // Total players: 3

// Utility class example
class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static reverse(str) {
    return str.split("").reverse().join("");
  }
}

console.log(StringUtils.capitalize("hello"));  // "Hello"
console.log(StringUtils.reverse("hello"));     // "olleh"`
      }
    ]
  },
  {
    title: "Browser Storage",
    description: "Remembering things between refreshes.",
    topics: [
      {
        title: "localStorage",
        definition: "localStorage saves data in the browser that stays even after you close the tab or browser! Perfect for remembering user preferences or saved data.",
        example: "Like writing in a notebook that never gets erased - the information stays there until you erase it yourself!",
        code: `// Save data
localStorage.setItem("username", "Alex");
localStorage.setItem("score", "100");
localStorage.setItem("level", "5");

// Get data
let username = localStorage.getItem("username");
console.log(username);  // "Alex"

let score = localStorage.getItem("score");
console.log(score);  // "100" (note: always returns string!)

// Save number (convert to string automatically)
localStorage.setItem("age", 10);

// Get and convert back to number
let age = Number(localStorage.getItem("age"));
console.log(age + 5);  // 15

// Remove one item
localStorage.removeItem("score");

// Clear everything
localStorage.clear();

// Save objects (use JSON)
let player = {
  name: "Alex",
  score: 95,
  level: 3
};

// Convert to JSON string before saving
localStorage.setItem("player", JSON.stringify(player));

// Get and convert back to object
let savedPlayer = JSON.parse(localStorage.getItem("player"));
console.log(savedPlayer.name);   // "Alex"
console.log(savedPlayer.score);  // 95

// Practical example - dark mode preference
function saveDarkMode(enabled) {
  localStorage.setItem("darkMode", enabled);
}

function loadDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  return darkMode === "true";  // Convert string to boolean
}

saveDarkMode(true);
console.log(loadDarkMode());  // true`
      },
      {
        title: "sessionStorage",
        definition: "sessionStorage works like localStorage but data is deleted when you close the tab! Good for temporary data during a session.",
        example: "Like a whiteboard - you can write on it during class, but it gets erased at the end of the day (when you close the tab)!",
        code: `// Works exactly like localStorage
sessionStorage.setItem("tempUser", "Guest");
sessionStorage.setItem("cartItems", "3");

// Get data
let tempUser = sessionStorage.getItem("tempUser");
console.log(tempUser);  // "Guest"

// Save object
let cart = {
  items: ["apple", "banana"],
  total: 5.99
};

sessionStorage.setItem("cart", JSON.stringify(cart));

// Get object
let savedCart = JSON.parse(sessionStorage.getItem("cart"));
console.log(savedCart.items);  // ["apple", "banana"]

// Remove item
sessionStorage.removeItem("cartItems");

// Clear all
sessionStorage.clear();

// When to use localStorage vs sessionStorage:
// localStorage: User preferences, saved games, settings
// sessionStorage: Shopping cart, form data, temporary filters

// Example - form data during session
function saveFormData(data) {
  sessionStorage.setItem("formData", JSON.stringify(data));
}

function loadFormData() {
  let data = sessionStorage.getItem("formData");
  return data ? JSON.parse(data) : null;
}

// Save user's form progress
saveFormData({
  name: "Alex",
  email: "alex@example.com",
  message: "Hello..."
});

// Load it back if page refreshes
let formData = loadFormData();
if (formData) {
  console.log("Restoring form:", formData);
}`
      },
      {
        title: "Cookies (Introduction)",
        definition: "Cookies are small pieces of data stored in the browser, but they're sent to the server with every request. They can have expiration dates!",
        example: "Like a permission slip that you show every time you go somewhere - cookies go with every web request!",
        code: `// Setting a cookie (basic)
document.cookie = "username=Alex";
document.cookie = "theme=dark";

// Setting cookie with expiration (7 days)
let date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
let expires = "expires=" + date.toUTCString();
document.cookie = "user=Alex; " + expires + "; path=/";

// Get all cookies (returns string)
console.log(document.cookie);
// "username=Alex; theme=dark; user=Alex"

// Helper function to set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Helper function to get cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return null;
}

// Helper function to delete cookie
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Using helpers
setCookie("username", "Alex", 7);  // Save for 7 days
console.log(getCookie("username"));  // "Alex"
deleteCookie("username");  // Delete it

// When to use what:
// localStorage: Long-term storage, large data
// sessionStorage: Temporary data for this tab
// cookies: Small data that needs to go to server`
      }
    ]
  },
  {
    title: "Performance & Best Practices",
    description: "Writing clean, professional code.",
    topics: [
      {
        title: "Clean Code Principles",
        definition: "Clean code is easy to read and understand. Use descriptive names, keep functions small, add comments when needed, and organize your code logically!",
        example: "Like keeping your room organized - everything has a place, it's easy to find things, and it looks nice!",
        code: `// ❌ BAD CODE - unclear, messy
let x = 10;
let y = 20;
function f(a,b){return a+b}
let z=f(x,y)

// ✅ GOOD CODE - clear, organized
let playerScore = 10;
let enemyScore = 20;

function calculateTotalScore(score1, score2) {
  return score1 + score2;
}

let totalScore = calculateTotalScore(playerScore, enemyScore);

// ❌ BAD - long function doing many things
function doEverything(user) {
  validateUser(user);
  saveToDatabase(user);
  sendEmail(user);
  updateUI(user);
  logActivity(user);
}

// ✅ GOOD - separate small functions
function processNewUser(user) {
  if (isValidUser(user)) {
    saveUser(user);
    notifyUser(user);
  }
}

// Use meaningful names
// ❌ BAD
let d = 7;
let temp = getData();

// ✅ GOOD
let daysUntilBirthday = 7;
let userData = getUserData();

// Add helpful comments
// Calculate area of a circle
function circleArea(radius) {
  const PI = 3.14159;
  return PI * radius * radius;
}

// Use consistent formatting
// ✅ GOOD
if (isLoggedIn) {
  showDashboard();
} else {
  showLogin();
}`
      },
      {
        title: "Common Mistakes to Avoid",
        definition: "Learning from common mistakes helps you write better code! Watch out for type coercion, variable scope issues, and forgetting to handle errors.",
        example: "Like learning from when you fell off your bike - now you know to be more careful!",
        code: `// ❌ MISTAKE 1: Using == instead of ===
if (5 == "5") {  // true (bad!)
  console.log("These are equal?");
}

// ✅ FIX: Use strict equality
if (5 === "5") {  // false (good!)
  console.log("This won't run");
}

// ❌ MISTAKE 2: Not using let/const (using var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3 (unexpected!)

// ✅ FIX: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 0, 1, 2 (expected!)

// ❌ MISTAKE 3: Modifying array while looping
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  numbers.pop();  // BAD! Changes array during loop
}

// ✅ FIX: Use filter or make a copy
let filtered = numbers.filter(num => num > 2);

// ❌ MISTAKE 4: Not handling errors
let data = JSON.parse(userInput);  // Might crash!

// ✅ FIX: Use try-catch
try {
  let data = JSON.parse(userInput);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON");
}

// ❌ MISTAKE 5: Not checking for null/undefined
let user = getUser();
console.log(user.name);  // Might crash!

// ✅ FIX: Check first
if (user && user.name) {
  console.log(user.name);
}

// Or use optional chaining
console.log(user?.name);`
      },
      {
        title: "Code Optimization Tips",
        definition: "Optimization makes code run faster and use less memory. Avoid unnecessary loops, reuse calculations, and use efficient methods!",
        example: "Like taking a shortcut instead of the long way - you get there faster!",
        code: `// ❌ SLOW: Creating strings in a loop
let result = "";
for (let i = 0; i < 1000; i++) {
  result += "text";  // Creates new string each time!
}

// ✅ FAST: Use array join
let parts = [];
for (let i = 0; i < 1000; i++) {
  parts.push("text");
}
let result = parts.join("");

// ❌ SLOW: Accessing DOM in loop
for (let i = 0; i < 100; i++) {
  document.getElementById("list").innerHTML += "<li>Item</li>";
}

// ✅ FAST: Build string first, update DOM once
let html = "";
for (let i = 0; i < 100; i++) {
  html += "<li>Item</li>";
}
document.getElementById("list").innerHTML = html;

// ❌ SLOW: Calculating same thing repeatedly
for (let i = 0; i < array.length; i++) {  // Checks length each time!
  console.log(array[i]);
}

// ✅ FAST: Cache the length
let len = array.length;
for (let i = 0; i < len; i++) {
  console.log(array[i]);
}

// Or use for...of
for (let item of array) {
  console.log(item);
}

// ❌ SLOW: Deep nesting
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    for (let k = 0; k < 100; k++) {
      // 1,000,000 iterations!
    }
  }
}

// ✅ FAST: Reduce nesting when possible
// Debouncing - don't run function too often
let timeout;
function handleResize() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    // Only runs after user stops resizing
    console.log("Resized!");
  }, 250);
}

window.addEventListener("resize", handleResize);`
      },
      {
        title: "Security Basics & Memory Management",
        definition: "Write secure code by validating input, avoiding XSS attacks, and being careful with user data. Let JavaScript's garbage collector handle memory, but avoid memory leaks!",
        example: "Like locking your door and not talking to strangers - be safe with code too!",
        code: `// ❌ SECURITY RISK: Directly using user input
let userInput = "<script>alert('hacked!')</script>";
element.innerHTML = userInput;  // BAD! Runs the script!

// ✅ SAFE: Use textContent or sanitize
element.textContent = userInput;  // Displays as text, safe!

// Or create element safely
let div = document.createElement("div");
div.textContent = userInput;

// ❌ SECURITY RISK: eval() - never use!
let code = "alert('dangerous!')";
eval(code);  // VERY BAD! Can run any code!

// ✅ SAFE: Use proper parsing
let data = JSON.parse(jsonString);

// Validate user input
function validateAge(age) {
  // Check type
  if (typeof age !== "number") {
    return false;
  }
  // Check range
  if (age < 0 || age > 150) {
    return false;
  }
  return true;
}

// ❌ MEMORY LEAK: Keeping references
let bigArray = new Array(1000000);
element.addEventListener("click", () => {
  console.log(bigArray);  // Keeps bigArray in memory forever!
});

// ✅ BETTER: Clean up when done
let bigArray = new Array(1000000);
function handler() {
  console.log(bigArray.length);
}
element.addEventListener("click", handler);

// Remove when no longer needed
element.removeEventListener("click", handler);
bigArray = null;  // Let garbage collector free memory

// ❌ MEMORY LEAK: Forgotten timers
let interval = setInterval(() => {
  console.log("Running...");
}, 1000);
// Never stopped!

// ✅ CLEAN: Stop when done
let interval = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  interval = null;
}, 10000);`
      }
    ]
  }
];
