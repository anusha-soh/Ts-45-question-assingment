"use strict";
//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_Fruits = ["Kiwi", "Orange", "Strawberry"];
if (favorite_Fruits.includes("Mango")) {
    console.log("You rally like 'Mango'.");
}
;
if (favorite_Fruits.includes("Kiwi")) {
    console.log("You rally like 'Kiwi'.");
}
;
if (favorite_Fruits.includes("Orange")) {
    console.log("You rally like 'Orange'.");
}
;
if (favorite_Fruits.includes("Apple")) {
    console.log("You rally like 'Apple'.");
}
;
if (favorite_Fruits.includes("Strawberry")) {
    console.log("You rally like 'Strawberry'.");
}
;
//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["Admin", "Asha", "Afra", "Talia", "Shaheen"];
for (let el of users) {
    if (el === "Admin") {
        console.log(`Hello ${el}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${el}, thank you for logging in again.`);
    }
}
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (users === null) {
    console.log(`We need to find some users!`);
}
;
users.splice(0);
if (users.length === 0) {
    console.log(`We need to find some users!`);
}
;
