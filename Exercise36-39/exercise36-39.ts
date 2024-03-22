//36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string , graphics: string ) {
    console.log(`i picked up a ${size}-sized shirt with '${graphics}' printed on it   `)
};

make_shirt("small","Peace!");

//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function large_shirts({ 
    size = "large",
    graphics = "I love typescriptt"
  }) {
   return console.log(`i picked up a ${size}-sized shirt with '${graphics}' printed on it`)
}
large_shirts({});
large_shirts({size : "medium"});
large_shirts({graphics : "Blessed!"});

//38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string  , country : string = "Pakistan") {
    return console.log(`${city} is in ${country}.`);
};
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Gujrat" , "India");

//39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned. 

function city_country( city : string , country: string) {
    console.log(`${city},${country}.`);
};

city_country("Ipkyo","Japan");
city_country("Sydney","Australia");
city_country("Barcelona","Spain");