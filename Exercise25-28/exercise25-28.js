"use strict";
// //25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color1 = "Green";
if (alien_color1 == "Green") {
    console.log("player earned 5 points.");
}
;
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color2 = "Yellow";
if (alien_color1 == "Red") {
    console.log("player earned 5 points.");
}
;
if (alien_color1 == "Yellow") {
    console.log("player earned 5 points.");
}
;
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color3 = "Yellow";
if (alien_color3 == "Green") {
    console.log("Player won 5 Points");
}
else {
    console.log("Player won 10 Points");
}
;
let alien_color4 = "Green";
if (alien_color4 == "Green") {
    console.log("Player won 5 Points");
}
else {
    console.log("Player won 10 Points");
}
;
//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor = "Red";
if (alienColor == "Green") {
    console.log(`Player Won 5 Points`);
}
else if (alienColor == "Yellow") {
    console.log(`Player Won 10 Points`);
}
else if (alienColor == "Red") {
    console.log(`Player Won 15 Points`);
}
;
let alienColor2 = "Yellow";
if (alienColor2 == "Green") {
    console.log(`Player Won 5 Points`);
}
else if (alienColor2 == "Yellow") {
    console.log(`Player Won 10 Points`);
}
else if (alienColor2 == "Red") {
    console.log(`Player Won 15 Points`);
}
;
let alienColor3 = "Green";
if (alienColor3 == "Green") {
    console.log(`Player Won 5 Points`);
}
else if (alienColor3 == "Yellow") {
    console.log(`Player Won 10 Points`);
}
else if (alienColor3 == "Red") {
    console.log(`Player Won 15 Points`);
}
;
//28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 25;
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 3 && age < 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult.");
}
else if (age >= 65) {
    console.log("person is a elder.");
}
