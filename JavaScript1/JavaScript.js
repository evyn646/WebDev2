console.log('Hello World');
let names = 'Mosh';
console.log(names);

alert('yo');

// cannot be a reserved keyword
// should be meaningful
// cannot start with a number
// cannot contain space or hyphen (-)
// are case-sensitive
// no reassign constant

let firstNames = 'Mosh';
let lastNames;

let interestRate = 0.3;
interestRate =1;
console.log(interestRate);

let nameS = 'Mosh'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let firstName = undefined;
let selected = null;

//dynamic language
//one number type

let person = {
    nameS: 'Mosh',
    age: 30,
}; //object literal

console.log(person);
let selection = 'nameS';

//dot notation
person.nameS = 'John';
//bracet notation
person['nameS'] = 'Mary';

console.log(person.nameS);

//array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);
//functions -performing a tast
function greet(nameS, lastName) { //parameter
    console.log('Hello' + nameS + lastName);
}

greet('John', 'Smith'); //argument
greet('Mary');

//calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));


