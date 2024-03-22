"use strict";
//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwhiches(items) {
    items.forEach(el => (el));
    return console.log(`A sandwitch with ${items} coming right up.`);
}
;
make_sandwhiches(["Lectus", "Chicken"]);
make_sandwhiches(["Lectus", "BBQ souse", "Beaf"]);
make_sandwhiches(["cucumber", "BBQ souse", "Beaf", "Tomatoes"]);
//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...additionalInfo) {
    const carInfo = {
        manufacturer,
        modelName
    };
    additionalInfo.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
}
const car = createCar('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);
console.log(car);
