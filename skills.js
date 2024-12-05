//create a pallindrome function that takes a string as an argument and returns true if the string is a pallindrome and false if it is not.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
let input = "AbA";
console.log(isPalindrome(input)); // true

input = "hello";
console.log(reverseString(input)); // "olleh"