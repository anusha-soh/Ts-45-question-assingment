"use strict";
//18.Seeing the World: Think of at least five places in the world you’d like to visit.
// store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
let myFavPlaces = ["Qatar", "Egypt", "Syria", "UK", "UAE", "France", "Japan"];
console.log(myFavPlaces);
//Print your array in alphabetical order without modifying the actual list.
let sortedArry = myFavPlaces.slice().sort();
console.log(sortedArry);
//Show that your array is still in its original order by printing it.
console.log(myFavPlaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(sortedArry.reverse());
//• Show that your array is still in its original order by printing it again.
console.log(myFavPlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
myFavPlaces.reverse();
console.log(myFavPlaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
myFavPlaces.reverse();
console.log(myFavPlaces);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
myFavPlaces.sort();
console.log(myFavPlaces);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
myFavPlaces.reverse();
console.log(myFavPlaces);
