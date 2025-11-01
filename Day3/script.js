//Task
// Question 1: Day of the Week
// Write a program that takes a number (1-7) and prints the corresponding day of the week.
// 	•	Input: 1 → Output: “Monday”
// 	•	Input: 5 → Output: “Friday”
// 	•	Input: 8 → Output: “Invalid day”
// Solve using BOTH if-else AND switch!

let dayNumber =5;

switch (dayNumber) {
    case 1:
        console.log("Monday")
        break;
    case 1:
        console.log("Tuesday")
        break;
    case 2:
        console.log("Wednesday")
        break;
    case 3:
        console.log("Thursday")
        break;
    case 4:
        console.log("Friday")
        break;
    case 5:
        console.log("Saturday")
        break;
    case 6:
        console.log("Sunday")
        break;
    case 7:
        console.log("Monday")
        break;

    default:
        console.log("Invalid Day")
        break;
}


// if-else
    let numberDay = 5; // You can change this number

if (numberDay === 1) {
  console.log("Monday");
} else if (numberDay === 2) {
  console.log("Tuesday");
} else if (numberDay === 3) {
  console.log("Wednesday");
} else if (numberDay === 4) {
  console.log("Thursday");
} else if (numberDay === 5) {
  console.log("Friday");
} else if (numberDay === 6) {
  console.log("Saturday");
} else if (numberDay === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid day");
}



// Question 2: Grade Calculator
// Convert a numeric grade to a letter grade.
// 	•	90-100: “A”
// 	•	80-89: “B”
// 	•	70-79: “C”
// 	•	60-69: “D”
// 	•	Below 60: “F”
// Solve using BOTH if-else AND switch! Which is better for this problem?

let marks=89;

if(marks >=90){
    console.log(" A")

}
else if(marks > 80 && marks < 90){
    console.log(" B")
}
else if(marks > 70 && marks < 80){
    console.log(" c")
}
else if(marks > 60 && marks < 70){
    console.log(" d")
}
else{
    console.log("f")
}



// Question 3: Month Name
// Given a month number (1-12), print the month name.
// 	•	1: “January”
// 	•	2: “February”
// 	•	12: “December”
// 	•	13: “Invalid month”
// Solve using switch statement.


let monthNumber = 12; // You can change this number

switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
}


// Question 4: Traffic Light
// Based on traffic light color, print what to do:
// 	•	“red” → “Stop”
// 	•	“yellow” → “Slow down”
// 	•	“green” → “Go”
// 	•	anything else → “Invalid color”
// Solve using BOTH if-else AND switch.

let color = "yellow"; // You can change this value

if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Slow down");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("Invalid color");
}


//switch
let colorr = "yellow"; // You can change this value

switch (colorr) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}


// Function calculator


function calculator(num1,num2,Input) {
    switch (Input) {
        case "add":
            console.log(num1+num2);
            break;
        case "sub":
            console.log(num1-num2);
            break;
        case "mul":
            console.log(num1*num2);
            break;
        case "div":
            console.log(num1/num2);
            break;
    
        default:
            console.log("invalid")
            break;
    }
    
}

calculator(22,22,"add")