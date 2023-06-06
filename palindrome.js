// creating prompt for user
const userWord = prompt('Enter a word:');

// function to determine if word is palindrome
function isPalindrome(word) {
    // Reverse the word
    const reversedWord = userWord.split('').reverse().join('');
    // Check if the reversed word is equal to the original word
    return userWord === reversedWord;
}

// I get the result
const result = isPalindrome(userWord);

// if cycle to see if is palyndrome or not
if (result) {
  console.log(`${userWord} is a palindrome.`);
} else {
  console.log(`${userWord} is not a palindrome.`);
}