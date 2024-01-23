// palindrome is a word that reads the same forwards and backwards
// examples include eye and Racecar
// either reading LHS to RHS get the same sequence of characters

// step 1 -equalize all casing i.e Racecar is a valid palindrome
// lowercase all words

// step 2 - removed non-alphanumeric characters with empty string
// consider "A Man, A Plan, A Canal - Panama!" is a valid Palindrome without any MARKS or SPACES

// step 3 - compare string to its reverse
// once step 1 and step 2 completed reverse the original str and compare to the stripped string

const palindromes = function (str) {
    // 1. lowercase the string
    let lwrStr = str.toLowerCase();
    console.log("string lowered: " + lwrStr);

    // 2. replace non-alpha numeric char with empty string
    // find any matching char between brackets
    // inside the brackets find a - z math lowercase letters
    // 0 - 9 match all numbers
    // use regex / / g. g being global finding all occurrences
    // returns an array
    let removeStr = lwrStr.replace(/[^a-z]/g,"");
    console.log("removed string: " + removeStr);

    // 3. compare string to its reverse
    //  split an array and return into a string using split method
    //  reverse the string
    // let reverseStr = removeStr.reverse().join();
    let reverseStr = removeStr.split("").reverse().join('');
    console.log("reversed string: " + reverseStr);

    return removeStr === reverseStr;

};

// Do not edit below this line
module.exports = palindromes;
