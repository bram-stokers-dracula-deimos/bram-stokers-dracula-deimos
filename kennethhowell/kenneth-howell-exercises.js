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

// todo: Password Generator
//  Create a script which will generate a random password, similar to this example. Allow your user to specify:
//  Total length
//  Number of special characters (including none)
//  Number of digits (including none)
//  Whether to use upper case, lower case, or both

function specialCharacters(num){
    var specialchars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","~",":",";","[","]","{","}","|","/","<",">"];
    var returnarr = [];
    for (let i = 0; i < num; i++){
        let index = (Math.floor(Math.random() * 25));
        returnarr.push(specialchars[index]);
    }
    return returnarr;
}

function onetoNineRandom(num){
    let returnarr = [];
    for (let i = 0; i < num; i++){
        let number = (Math.floor(Math.random() * 10));
        returnarr.push(number)
    }
    return returnarr;
}

function alphabetRandom(num){
    let returnarr = [];
    let characterarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        for (let i = 0; i < num; i++){
            let index = (Math.floor(Math.random() * 26));
            returnarr.push(characterarr[index]);
        }
    return returnarr;
}
function caseUpperLower(arr){
    let workingarr = arr.flat(Infinity);
    let arrlengthhalf = workingarr.length / 2;
    workingarr.sort().reverse();
    let halfarr = workingarr.splice(0, arrlengthhalf);
    let strarrhalf = halfarr.length / 2;
    // console.log("Half of the array reporting in: " + halfarr);
    let halfstr = halfarr.splice(0, strarrhalf);
    halfstr = halfstr.join("");
    halfstr = halfstr.toUpperCase();
    // console.log("Half the string reporting in uppercase: " + halfstr);
    halfstr = halfstr.split("");
    halfarr.push(halfstr);
    workingarr.push(halfarr);
    workingarr = workingarr.flat(2);
    // console.log("caseUpperLower at the end reporting in: " + workingarr);
    return workingarr;

}

function genPassword(totallength, specialcharnum, digits, casestr){
    let workinglength = totallength;
    let generatedPW = [];
    let caseinput = casestr.toLowerCase();
    if (specialcharnum > 0){
        workinglength = workinglength - specialcharnum;
        generatedPW.push(specialCharacters(specialcharnum))
    };
    if (digits > 0){
        workinglength = workinglength -  digits;
        generatedPW.push(onetoNineRandom(digits));
    };
    if (workinglength >= 0){
        generatedPW.push(alphabetRandom(workinglength));
    };
    if (caseinput === "both") {
        generatedPW = caseUpperLower(generatedPW);
    };
    if (caseinput === "upper"){
        generatedPW = generatedPW.flat(Infinity);
        generatedPW = generatedPW.join("");
        generatedPW = generatedPW.toUpperCase();
        generatedPW = generatedPW.split("");
    };

    generatedPW = generatedPW.flat(Infinity);
    generatedPW.sort(function(a,b){return 0.5 - Math.random()});
    generatedPW = generatedPW.join("");
    console.log(generatedPW);
    return generatedPW;
}

password = genPassword(5, 2, 1, "both");
console.log("Got your new password here: " + password);
password = genPassword(10, 0, 3, "upper");
console.log("Got your new password here: " + password);
password = genPassword(7, 2, 0, "lower");
console.log("Got your new password here: " + password);


// TODO: Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//  To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(changearray, totalprice){
    let changevalidate;
    let notchange;
    changearray.forEach(function(element){
        if (isNaN(element) || typeof element === "boolean"){
            changevalidate = false;
            notchange = element;
            return changevalidate;
        }
    });

    if (isNaN(totalprice) && changevalidate === false){
        console.log(`${notchange}? And what you're buying is ${totalprice}? What is going on in this transaction?`)
    };

    if (isNaN(totalprice) || typeof totalprice === "boolean"){
        console.log("What the heck are you buying that charges that?");
        return;
    };

    if (changevalidate === false){
        console.log(` ${notchange}? Whatever else you have in your pocket is your business...`);
        return;
    };


    let quarterstotal = changearray[0] * .25;
    let dimestotal = changearray[1] * .10;
    let nickelstotal = changearray[2] * .05;
    let penniestotal = changearray[3] * .01;
    let changetotal = (quarterstotal + dimestotal + nickelstotal + penniestotal);

    if (changetotal > totalprice){
        console.log(`$${quarterstotal.toFixed(2)} is your total from ${changearray[0]} quarters. \n$${dimestotal.toFixed(2)} is your total from ${changearray[1]} dimes. \n$${nickelstotal.toFixed(2)} is your total from ${changearray[2]} nickels. \n$${penniestotal.toFixed(2)} is your total from ${changearray[3]} pennies. \nYour change adds up to $${changetotal.toFixed(2)}! \nYou're good to go since the total price is $${totalprice.toFixed(2)} and you have $${(changetotal - totalprice).toFixed(2)} left.`)
    } else {
        console.log(`$${quarterstotal.toFixed(2)} is your total from ${changearray[0]} quarters. \n$${dimestotal.toFixed(2)} is your total from ${changearray[1]} dimes. \n$${nickelstotal.toFixed(2)} is your total from ${changearray[2]} nickels. \n$${penniestotal.toFixed(2)} is your total from ${changearray[3]} pennies. \nYour change adds up to $${changetotal.toFixed(2)}! \nBad news since your total was $${totalprice.toFixed(2)} meaning you need $${(totalprice - changetotal).toFixed(2)} to purchase.`)

    }
}
// console.log("Success paths:");
// changeEnough( [4, 10, 20, 100], 5.03);
// changeEnough( [10, 20, 30, 400], 5.03);
// console.log("Failure paths:");
// changeEnough([2, 44, 1, 15], "peso");
// changeEnough(["chuck e cheese token", 44, 1, 15], 4);
// changeEnough([true, 44, 1, 15], 4);
// changeEnough(["chuck e cheese token", 44, 1, 15], true);


// todo: Return the total number of arrays inside a given array.

let threearrays = [[1,2,3],[3,2,1],[2,1,3]];
let twoarrays = [[1,2,],[2,1]];
let onearray = [1,2];
let manyarrays = [[1,2],[3,4,5],[6,7,8],[9,0],[9,8,7],[6,5],[4,3,2,1],[0,0,0]];

function numberofsubArrays (arr){
    let counter = 0;
    if (typeof arr[1] === "object"){
    arr.forEach(function(subarray){
        if (Array.isArray(subarray)){
            counter++;
            return;
        };
    })} else if (Array.isArray(arr) && typeof arr[1] !== "object"){
        counter++;
    }

    return counter;
}

// console.log(numberofsubArrays(onearray));
// console.log(numberofsubArrays(twoarrays));
// console.log(numberofsubArrays(threearrays));
// eight arrays below
// console.log(numberofsubArrays(manyarrays));
