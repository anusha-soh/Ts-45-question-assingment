// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["sham.khan","aliiii_34","aLizz_here","no_name","maliaaa"];
let new_users: string[] = ["libaaa","sham.Khan","ayesha.khan","aliiii_34","nase_r"];

let lcnew_users = new_users.map(el => el.toLowerCase());
for(let el of current_users) {
    if(lcnew_users.includes(el.toLowerCase())) {
        console.log(`username ${el} is not available.`)
    }
};

//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

let nums: number[] = [1,2,3,4,5,6,7,8,9];

// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
nums.forEach(el => {
    if (el === 1) {
        console.log(`${el}st`);
    } else if (el === 2) {
        console.log(`${el}nd`);
    } else if (el === 3) {
        console.log(`${el}rd`);
    } else {
        console.log(`${el}th`);
    }
});

