function calculator() {
  const numInput1 = Number(prompt("Enter a number: "));
  const numInput2 = Number(prompt("Enter another number: "));
  const operation = prompt("Select your operation: +, -, *, /");
  const numSum = numInput1 + numInput2;
  const numDiff = numInput1 - numInput2;
  const numMult = numInput1 * numInput2;
  const numDiv = numInput1 / numInput2; 

  if ((isNaN(numInput1)) || isNaN(numInput2)) {
    alert("That is not a number!")
    console.log("User inputted non-numerical value")
  }
  else {
    if (operation === "+") {
      alert(`The result of ${numInput1} ${operation} ${numInput2} = ${numSum}`);
      console.log(`The result of ${numInput1} ${operation} ${numInput2} = ${numSum}`);
    }
    else if (operation === "-") {
      alert(`The result of ${numInput1} ${operation} ${numInput2} = ${numDiff}`);
      console.log(`The result of ${numInput1} ${operation} ${numInput2} = ${numDiff}`);
    }
    else if (operation === "*") {
      alert(`The result of ${numInput1} ${operation} ${numInput2} = ${numMult}`);
      console.log(`The result of ${numInput1} ${operation} ${numInput2} = ${numMult}`);
    }
    else if (operation === "/") {
      alert(`The result of ${numInput1} ${operation} ${numInput2} = ${numDiv}`);
      console.log(`The result of ${numInput1} ${operation} ${numInput2} = ${numDiv}`);
    }
    else {
      alert("You have entered an invalid operation!");
      console.log("You have entered an invalid operation!")
    }
  } 
};

calculator();