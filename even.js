// prompting user
const userChoice = prompt('Choose even or odd:');
const userNumber = parseInt(prompt('Enter a number from 1 to 5:'));

function generateRandomNumber() {
  // Generate a random number between 1 and 5
  return Math.floor(Math.random() * 5) + 1;
}
