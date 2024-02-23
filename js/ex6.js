// Strings and Functions

// Vowel function
const vowelList = ["a", "e", "i", "o", "u", "y"];

function numVowels(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowelList.includes(letter)) {
      count++;
    }
  }
  return count;
}

// Palindrome function
function palindrome(strVal) {
  const wordValues = strVal.split('')
  const revwordValues = wordValues.reverse();
  const revstrVal = revwordValues.join('');
  if (strVal.toLowerCase() === revstrVal.toLowerCase()) {
    const validInput = "is a palindrome";
    return validInput;
  }
  else {
    const invalidInput = "is not a palindrome";
    return invalidInput;
  }
}

const userInput = prompt("Enter a word: ");

alert(`${userInput} contains ${numVowels(userInput)} vowel(s) and ${palindrome(userInput)}`);
console.log(`${userInput} contains ${numVowels(userInput)} vowel(s) and ${palindrome(userInput)}`);
