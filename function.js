/**
 * This file contains two functions:
 * 1. reverseString: Takes a string as input and returns the reversed string.
 * 2. isPalindrome: Takes a string as input and returns true if the string is a palindrome, otherwise false.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"


function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false