// creating prompt for user
const userWord = prompt('Enter a word:');

// function to determine if word is palindrome
function isPalindrome(word) {
    // Reverse the word
  const reversedWord = formattedWord.split('').reverse().join('');
  // Check if the reversed word is equal to the original word
  return formattedWord === reversedWord;
}