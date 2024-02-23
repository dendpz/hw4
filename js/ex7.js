// Guess a number

let randNumber = Math.floor(Math.random() * 100) + 1;
let i = 0;
let attempt = 0;

while (i === 0) {
  const userInput = Number(prompt("Guess the number: "));
  if (userInput === randNumber && false === isNaN(userInput)) {
    attempt++;
    alert(`Correct! It took you ${attempt} attempt(s) to guess the correct number.`);
    console.log(`Correct! It took you ${attempt} attempt(s) to guess the correct number.`);
    i = 1;
  }
  else if (false === isNaN(userInput)) {
    attempt++;
    if (userInput > randNumber) {
      alert("Too high, guess again");
      console.log("Too high, guess again");
    }
    else if (userInput < randNumber) {
      alert("Too low, guess again");
      console.log("Too low, guess again")
    }
  }
  else if (isNaN(userInput)) {
    alert("Invalid entry, please enter a number!");
    console.log("Invalid entry, please enter a number!");
  }
}