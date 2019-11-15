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
var palindromeArray4 = ["7", "f", "ce667ec"];

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


function countPalindrones(arr){
    let returnarray = [];
    arr.forEach(function(element){
        returnarray.push(mapString(element));
    });
    return returnarray;
}
//
//
// console.log(countPalindrones(palindromeArray));
// console.log(countPalindrones(palindromeArray2));
// console.log(countPalindrones(palindromeArray3));
// console.log(countPalindrones(palindromeArray4));

// todo:
//  Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:
//  Each row must have the digits from 1 to 9 exactly once.
//  Each column must have the digits from 1 to 9 exactly once.
//  Each 3x3 box must have the digits from 1 to 9 exactly once.
//  Examples
//  sudokuValidator([
//     [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
//     [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
//     [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
//     [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
//     [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
//     [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
//     [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
//     [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
//     [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
//     ]) ➞ true
//     sudokuValidator([
//     [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
//     [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
//     [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
//     [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
//     [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
//     [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
//     [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
//     [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
//     [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
//     ]) ➞ false

// check initial array; build out to three 3x3s, expand out?
function arrayCheck(arr){

}