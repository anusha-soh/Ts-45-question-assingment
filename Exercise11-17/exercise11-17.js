"use strict";
//11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Afra", "Areesha", "Jaweria", "Kinat"];
names.forEach((val) => console.log(val));
//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
names.forEach((friendName) => console.log(`Hello ${friendName}, I am having My bithday party this weekend, you and your family is invited.`));
//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const mytransport = ["Batmobile", "Mercedes", "Yamaha MT"];
for (let i = 0; i <= 2; i++) {
    console.log(`I like the design of ${mytransport[i]}.`);
}
//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestList = ["Alama Iqbal", "Molana Jalal uddin", "Robert Frost"];
guestList.forEach((val) => {
    console.log(`Dear ${val}, I would be honered to have you esteemed company for a delightful dinner at my house coming saturday, looking forward to sharing good food nd meaningful conversation.`);
});
//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`I came to know that ${guestList[2]} can't make it.`);
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList.splice(2, 1, "Fraz Ahmed Fraz");
//Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach((val) => {
    console.log(`Dear ${val}, I would be honered to have you esteemed company for a delightful dinner at my house coming saturday, looking forward to sharing good food nd meaningful conversation.`);
});
//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Hello gentelmen, a new dinner table has been found so more guests will be joining us!!");
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guestList.splice(2, 0, "Shah Abdul Latif");
guestList.push("Muhammad Hafeez");
guestList.forEach((val) => {
    console.log(`Dear ${val}, I would be honered to have you esteemed company for a delightful dinner at my house coming saturday, looking forward to sharing good food nd meaningful conversation.`);
});
//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Hello everyone, I just found out that your new dinner table won’t arrive in time for the dinner");
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest},I apologise, but due to the unforseen circumstances, i need to recnid the invitation. Thank you for understanding.`);
}
;
//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach((val) => {
    console.log(`Dear ${val}, you are still invited.`);
});
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestList.splice(0));
