// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
const guestList: string[] = ["Alama Iqbal", "Molana Jalal uddin" , "Robert Frost"];



guestList.forEach((val)=>{
    console.log(`Dear ${val}, I would be honered to have you esteemed company for a delightful dinner at my house coming saturday, looking forward to sharing good food nd meaningful conversation.`);
});
let invitation: string = `hello every one i am inviting ${guestList.length} people to dinenr.`;
console.log(invitation);

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let flowers: string[] = ["Rose","Sunflower","Tulip","Orchid","Lily","Daisy","Lavender"];
let list: string="";
for (let i = 0; i < flowers.length; i++) {
    list +=(i+1)+")"+flowers[i]+"."+"\n";
}

console.log(list);

