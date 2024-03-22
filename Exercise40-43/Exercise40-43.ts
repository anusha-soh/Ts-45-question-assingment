//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName: string, albumName : string) 
{
    return {
        artist : artistName,
        album : albumName
    }
};
let album1 = make_album("Taylor Swift","Red");
let album2 = make_album("One Directon","Made in the A.M");
let album3 = make_album("Zayn Malik","Mind of mine");

console.log(album1);
console.log(album2);
console.log(album3);

interface album {
    artist: string;
    album: string;
    tracks?: number;
}
function make_album2(artist: string, album: string , tracks?:number ) :album {
    let albumObj : album = {
        artist,
        album
    };
    if (tracks !== undefined) {
        albumObj.tracks = tracks;
    }
    return albumObj
}

let album4 = make_album2("One Directiom","Four",13);
console.log(album4);

let album5 = make_album2("One Directiom","Up all night");
console.log(album5);

//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["Harry Houdini","David Copperfield","penn","Teller"];

function show_magicians(names: string[]) {
    return console.log(names);
} 
show_magicians(magicians);

//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function make_great(name: string[]) {
    let greatMeg = name.map(el =>`the Great ${el}.`);
    return console.log(greatMeg);
};

make_great(magicians);

//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
show_magicians(magicians);
let newMeg = make_great(magicians);
console.log(newMeg);
