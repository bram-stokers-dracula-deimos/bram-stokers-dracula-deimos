// todo:: Strings can be segregated into both their letter and digit components.
//  A double palindrome is when a string's letter component and digit component are both palindromes.
//  A single-palindrome is when either (but not both) the letter component or the digit component are palindromes.
//     To illustrate:
//  "cab97ac79" // double-palindrome
//  "cabac" and "9779" are both palindromes
//  "1abc4de1" // single-palindrome
//  "141" is a palindrome.
//  palindromeSet(["cb77c", "ccc888", "ccc789", "abc89"]) ➞ [2, 2, 1, 0]
//  palindromeSet(["789", "555", "ccc", "abba"]) ➞ [0, 1, 1, 1]
//  palindromeSet(["7a", "5f", "6c"]) ➞ [2, 2, 2]
//  Write a function that maps double palindromes to the number 2, single palindromes to the number 1, and everything else to the number 0

var palindromeArray = ["cb77c", "ccc888", "ccc789", "abc89"];
var palindromeArray2 = ["789", "555", "ccc", "abba"];
var palindromeArray3 = ["7a", "5f", "6c"];

function mapString(string){
    let stringarray = string.split("");
    let numbers = [];
    let letters = [];
    let counter = 0;
    stringarray.forEach(function(character){
        if ( !isNaN(character)){
            numbers.push(character);
        } else {
            letters.push(character);
        }
    });
    let lettersreversed = letters.slice().reverse();
    let lettersreversedstring = lettersreversed.join("");
    let numbersreversed = numbers.slice().reverse();
    let numbersreversedstring = numbersreversed.join("");
    let originalletters = letters.join("");
    let originalnumbers = numbers.join("");
    if (originalletters === lettersreversedstring && letters.length > 0){
        counter++;
    };
    if (originalnumbers === numbersreversedstring && numbers.length > 0){
        counter++;
    }

    return counter;
}


console.log(mapString("789"));

function countPalindrones(arr){
    let returnarray = [];
    arr.forEach(function(element){
        returnarray.push(mapString(element));
    });
    return returnarray;
}
//
//
console.log(countPalindrones(palindromeArray));
console.log(countPalindrones(palindromeArray2));
console.log(countPalindrones(palindromeArray3));

