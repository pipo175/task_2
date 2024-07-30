// check number even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "The number " + number + " is even.";
    } else {
        return "The number " + number + " is odd.";
    }
}

let user_input = prompt("Please enter a number:");
let number = parseInt(user_input);

if (!isNaN(number)) {
    console.log(checkEvenOrOdd(number));
} else {
    console.log("Please enter a valid number.");
}


// the sum of tow numbers
let first_input = prompt("Please enter the first number:");
let first_number = parseFloat(first_input);
let second_input = prompt("Please enter the second number:");
let second_number = parseFloat(second_input);

if (!isNaN(first_number) && !isNaN(second_number)) {
    let sum = first_number + second_number;
    console.log("The sum of " + first_number + " and " + second_number + " is " + sum + ".");
} else {
    console.log("Please enter valid numbers.");
}



  // check the number positive or negative
let firstInput = prompt("Please enter the first integer:");
let firstNumber = parseInt(firstInput);
let secondInput = prompt("Please enter the second integer:");
let secondNumber = parseInt(secondInput);

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    if ((firstNumber > 0 && secondNumber < 0) || (firstNumber < 0 && secondNumber > 0)) {
        console.log("One number is positive and the other is negative.");
    } else {
        console.log("Both numbers are either positive or negative.");
    }
} else {
    console.log("Please enter valid integers.");
}



 // compute circle 
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}
let radiusInput = prompt("Please enter the radius of the circle:");
let radius = parseFloat(radiusInput);

if (!isNaN(radius) && radius > 0) {
    let area = calculateArea(radius);
    let circumference = calculateCircumference(radius);
    console.log("For a circle with radius " + radius + ":");
    console.log("Area: " + area.toFixed(2));
    console.log("Circumference: " + circumference.toFixed(2));
} else {
    console.log("Please enter a valid positive number for the radius.");
}

