//Getting Started Exercises with TypeScript and Node.js.

//1. Install Node.js, TypeScript and VS Code on your computer.
//My typescript environment has been setup.

//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let receiver: string = "Zarik";
console.log(`Hello ${receiver}, are you up for hiking this week?`);

//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let personName: string = "Marry jane";

console.log(`In upper case : ${personName.toUpperCase()}`);
console.log(`In upper case : ${personName.toLowerCase()}`);

function toTitleCase(input: string) :string {
    const words = input.toLowerCase().split(' '); // Here we split the sentance into words ussing split('') and store it in word variable.
    const titleCaseWords = words.map(  // here we use map saperate each alphabet into array and charAt to turn character at 0 index into uppercase
        (word) => { return word.charAt(0).toUpperCase()+word.slice(1)}  // we use slice to get all characters of word from 1st index, '+' for concatinat idx 0 to remaining letters  
    )
    return titleCaseWords.join(' '); // here we use join(' ') to rejoin array jnto string
}
console.log(`In upper case : ${toTitleCase(personName)}`);