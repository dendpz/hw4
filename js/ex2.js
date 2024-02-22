// Convert Fahrenheit to Celsius

// Below is starter code:

// Write code for a function
function fahrenheitToCelsius(conValue) {
  const conversion = Math.round(((conValue - 32) * (5 / 9)));
  return conversion
}
// TODO:  your code here
const userInput = Number(prompt("Please enter the temperature in fahrenheit: "));
alert(`Your temperature in ${userInput} in F or ${fahrenheitToCelsius(userInput)} in C`);
console.log(`Your temperature in ${userInput} in F or ${fahrenheitToCelsius(userInput)} in C`);

// Test your function.
// Note the following:
//   Input: Fahrenheit temperature
//   Output: Fahrenheit temperature converted to Celsius
//
// Various users may use the function and display the output in 
//   different formats.  Therefore, the function returns the result and
//   does not display it on the console.

// Create input and output variables and test
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);

// Test with 32 degrees Fahrenheit (No variables)
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees Celsius`);

// Create a variable and test
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7)} is equivalent to 37 degrees Celsius`); // NOTE TO Professor: I'm not sure if this was an error...result in celcius repeats twice? I copied and pasted this starter code, no changes made
