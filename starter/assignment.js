//ASSIGNMENT 1-  Functions

/* Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console 

function describeCountry(country, population, capitalCity) {
    console.log(country, population, capitalCity);
    const dr = `${country} has ${population} million people its capital city is ${capitalCity}`;
    return dr;
}
const about = describeCountry('Finland', 6, 'Helsinki');
console.log(about);

function describeCountry2(country2, population2, capitalCity2) {
    const dr1 = `${country2} has ${population2} million people its capital city is ${capitalCity2}`;
    return dr1;
}
const about2 = describeCountry2('India', 1393, 'New Delhi');
console.log(about2);

//ASSIGNMENT 2 -Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations 

function percentageOfWorld1(population, country) {
    const percent = (population / 7900) * 100;
    const popRep = ` ${country} has ${population} million people, so its about ${percent}% of the world population`;
    return popRep;
}
const pow = percentageOfWorld1(1393, 'India');
console.log(pow);

const percentageOfWorld2 = function (population, country) {
    const percent = (population / 7900) * 100;
    const popRep = ` ${country} has ${population} million people, so its about ${percent}% of the world population`;
    return popRep;
}
const pow1 = percentageOfWorld2(1393, 'Finland');
console.log(pow1); 

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1)  

//assignment - ARROW FUNCTION
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3 */
