// prompting user
const userChoice = prompt('Choose even or odd:');
const userNumber = parseInt(prompt('Enter a number from 1 to 5:'));

function generateRandomNumber() {
  // Generate a random number between 1 and 5
  return Math.floor(Math.random() * 5) + 1;
}

function isEven(number) {
  // Check if the number is even
  return number % 2 === 0;
}

// function to determine winner
function determineWinner(userChoice, userNumber, computerNumber) {
  const sum = userNumber + computerNumber;
  const isSumEven = isEven(sum);

  console.log(`User's Choice: ${userChoice}`);
  console.log(`User's Number: ${userNumber}`);
  console.log(`Computer's Number: ${computerNumber}`);
  console.log(`Sum of the Numbers: ${sum}`);

  //   if cycle to determine winner
  if ((userChoice === 'even' && isSumEven) || (userChoice === 'odd' && !isSumEven)) {
    console.log('Congratulations! You won!');
  } else {
    console.log('Computer wins! Better luck next time!');
  }
}

// if cycle to determine if invalid number were prompted
