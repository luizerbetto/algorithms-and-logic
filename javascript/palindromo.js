function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word == reversed;
}

console.log(isPalindrome("arara"));
console.log(isPalindrome("banana"));