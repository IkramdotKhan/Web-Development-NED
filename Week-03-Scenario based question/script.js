// Write a JavaScript program that takes 10 students marks from the user and perform following operations.
// 1. Find the number of students that have scored A+, A, B, C, D, F 
// Criteria:
// A+ greater than and equal to 90
// A greater than and equal to 80 and less than 90
// B greater than and equal to 70 and less than 80
// C greater than and equal to 60 and less than 70
// D greater than and equal to 50 and less than 60
// F less than 50
// 2. Find number of students that have passed/failed
// 3. Find the average, lowest, highest marks in the class.

// Creating an empty array to store the marks that we will take from user .
let marks = [];

// As we know that we will take "10" marks from user so . 
let totalStudents = 10; 

// Taking marks from the user
for (let i = 0; i < totalStudents; i++) {
    let mark = parseFloat(prompt(`Enter marks of student ${i + 1}:`));
    marks.push(mark);
}

var aplus = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;
var pass = 0;
var fail = 0;
var sum = 0;
var lowest = marks[0];
var highest = marks[0];

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];

    // Pass or Fail
    if (marks[i] >= 50) {
        pass++;
    } else {
        fail++;   // fail++ is same as fail = fail + 1 
    }

    // Lowest and Highest
    if (marks[i] < lowest) {
        lowest = marks[i];
    } 
    if (marks[i] > highest) {
        highest = marks[i];
    }

    // Grade Calculation
    if (marks[i] >= 90) {
        aplus++;
    }
    else if (marks[i] >= 80 && marks[i] < 90) {
        a++;
    }
    else if (marks[i] >= 70 && marks[i] < 80) {
        b++;
    }
    else if (marks[i] >= 60 && marks[i] < 70) {
        c++;
    }
    else if (marks[i] >= 50 && marks[i] < 60) {
        d++;
    }
    else {
        f++;
    }
}

let average = sum / marks.length;

// Output Results
document.writeln("<h3> Final Summary </h3>");
document.writeln("Total Students: " + marks.length + "<br>");
document.writeln("Passed: " + pass + "<br>");
document.writeln("Failed: " + fail + "<br>");
document.writeln("Average Marks: " + average.toFixed(2) + "<br>");
document.writeln("Lowest Marks: " + lowest + "<br>");
document.writeln("Highest Marks: " + highest + "<br><br>");

document.writeln("<h3> Grade Distribution </h3>");
document.writeln("A+ (90–100): " + aplus + "<br>");
document.writeln("A (80–89): " + a + "<br>");
document.writeln("B (70–79): " + b + "<br>");
document.writeln("C (60–69): " + c + "<br>");
document.writeln("D (50–59): " + d + "<br>");
document.writeln("F (<50): " + f + "<br>");
