"use strict";
// //21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let product = {
    name: "Niv 30",
    type: "Moisteriser",
    price: 500,
    isAvailable: true,
};
//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const guestList = ["Alama Iqbal", "Molana Jalal uddin", "Robert Frost"];
guestList.forEach((val) => {
    console.log(`Dear ${val}, I would be honered to have you esteemed company for a delightful dinner at my house coming saturday, looking forward to sharing good food nd meaningful conversation.`);
});
//console.log(`I came to know that ${guestList[4]} can't make it.`); //Error: Undefined.
console.log(`I came to know that ${guestList[2]} can't make it.`);
