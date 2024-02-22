// List of words

wordList = [];
let addWords = 0;

while (addWords === 0) {
  const userInput = prompt("Please enter words, or enter \"stop\" to exit program: ");
  if (((userInput.toLowerCase() === "stop" && wordList.length === 0))) {
    alert("No words to display, Stop was the first word entered");
    console.log("No words to display, Stop was the first word entered");
    addWords = 1;
  }
  else if (userInput.toLowerCase() != "stop") {
    wordList.push(userInput);
  }
  else if (userInput.toLowerCase() === "stop" && wordList.length > 0) {
    alert("You have entered the following words: ");
    console.log("You have entered the following words: ");
    wordList.forEach(i => {
      alert(i);
      console.log(i);
    })
    addWords = 1;
  }
}