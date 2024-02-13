// Represents a comment - why and how this code is written - should be the aim of the comment
// console.log("hello world");

let firstName = 'Ajay';
let lastName = "Anand";
// console.log(firstName);

const interestRate = 0.3;
// console.log(interestRate);
;
let isApproved = true;
let firstNameBot = null;
let secondNameBot = undefined;

let person = {
        name: "Ajay",
        age: 28
};

// Dot notation to access the properties
person.name = "Max";
console.log(person.name);

// Bracket notation
console.log(person["name"] = "Rock");

//Arrays in JS
let selectedColours = ["red", "blue"];
console.log(selectedColours);
console.log(selectedColours[0]);

selectedColours[2] = "green";
console.log(selectedColours);

selectedColours[3] = 100;
console.log(selectedColours);

// length keyword
console.log(selectedColours.length);

// functions performing a task
function greet(firstName, secondNameBot) {
        console.log("Hello World");
        console.log('Hello ' + firstName + " " + secondNameBot);
}

greet("Matt"); // will give: Hello Matt undefined
greet("pop", "smith")

// Types of functions

//Calculates a value
function square(number) {
        return number * number;
}

console.log(square(12));

