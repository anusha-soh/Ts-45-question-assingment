// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.


let favPizza: string[] = ["Four cheese Pizza","pepperoni Piza","Fajita"];

for (let el of favPizza) {
    console.log(el);
};

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

for (let el of favPizza) {
    console.log(`I really like the flavour of ${el}.` );
};

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I could eat pizza every day!!");


// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Tiger","Lion","Wolf"];
for (let el of animals) {
    console.log(`${el}` );
};



let zooAnimals: string[] = ["Tiger","Lion","Wolf"];
for (let el of zooAnimals) {
    console.log(`i saw ${el} in the zoo yesterday` );
};
