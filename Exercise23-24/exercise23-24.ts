//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let flower: string = "Rose";
console.log("Is flower == 'Rose'? I predict true");
console.log(flower == 'Rose');

let pet:string = "Dog";
console.log("Is pet == 'Cat'? I predict false");
console.log(pet == 'Cat');

let pen: string = "red";
console.log("Is pen == 'red'? I predict true");
console.log(pen == 'red');

let persone: string = "Male";
console.log("Is person == 'Female'? I predict false");
console.log( persone == 'Femail');

let myFavNum: number = 5;
console.log("Is My favrorite number == 5? I predict true");
console.log(myFavNum == 5);

let coffee: string = "Dark";
console.log("Is coffee == 'Milk'? I predict false");
console.log( coffee == 'Milk');

let numOfDogs: number = 7;
console.log("number of Dogs are == 7? I predict true");
console.log(numOfDogs == 7);

let tea: string = "Green";
console.log("Is tea == 'Green'? I predict true");
console.log( tea == 'Green');

let windows: string = "Closed";
console.log("are Windows == 'Open'? I predict false");
console.log(windows == 'Open')

let book:string ="Harry Potter";
console.log("Is book == 'GOT'? I predict false");
console.log (book == "GOT");

//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings

let icecream: string = "Available";
console.log("Is icecream == 'Not Available'? I predict false"); 
console.log(icecream == "Not Available");

let course: string = "Completed";
console.log("is course == 'completed' I predict true");
console.log(course == "Completed");

// • Tests using the lower case function

let container:string = "empty";
console.log("is container == 'EMPTY' i prEdict false");
console.log(container == "EMPTY");

let container2:string = "empty";
console.log("is container2 == 'empty' i prEdict true");
console.log(container2 == "empty");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let nums: number[] = [2,4,7,3,8,0,9,16];

console.log(`Is ${nums[0]} !== ${nums[5]}? i predict true`);
console.log(nums[0] !== nums[5]);

console.log(`Is ${nums[5]} == ${nums[5]}? i predict true`);
console.log(nums[5] == nums[5]);


console.log(`Is ${nums[7]} !== ${nums[5]}? i predict false`);
console.log(nums[7] !== nums[5]);


console.log(`Is ${nums[4]} > ${nums[2]}? i predict true`);
console.log(nums[4] !== nums[2]);


console.log(`is ${nums[6]} < ${nums[0]}? i predict false`);
console.log(nums[6] < nums[0]);


console.log(`is ${nums[7]} >= ${nums[5]}? i predict true`);
console.log(nums[7] !== nums[5]);


console.log(`is ${nums[4]} <= ${nums[0]}? i predict false`);
console.log(nums[4] <= nums[0]);

// • Tests using "and" and "or" operators
console.log(`${nums[4]} <= ${nums[0]} && ${nums[4]} >= ${nums[0]} ? i predict false`);
console.log(nums[4] <= nums[0] && nums[4] >= nums[0]);


console.log(`${nums[4]} <= ${nums[6]} && ${nums[4]} >= ${nums[0]} ? i predict true`);
console.log(nums[4] <= nums[6] && nums[4] >= nums[0]);

console.log(`${nums[4]} <= ${nums[0]} || ${nums[4]} >= ${nums[0]} ? i predict true`);
console.log(nums[4] <= nums[0] || nums[4] >= nums[0]);

console.log(`${nums[4]} <= ${nums[1]} || ${nums[4]} >= ${nums[0]} ? i predict false`);
console.log(nums[4] <= nums[1] || nums[4] == nums[0]);

// • Test whether an item is in a array
console.log(`Array nums has number 2`);
console.log(nums.includes(2));

console.log(`Array nums has number 5`);
console.log(nums.includes(5));

// • Test whether an item is not in a array
console.log(`Array nums do not have number 2`);
console.log(nums.indexOf(2) == -1);

console.log(`Array nums do not have number 5`);
console.log(nums.indexOf(5) == -1);
