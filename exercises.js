// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

function FirstFactorial(num){
    if (num === 0){
        return 1;
    }
    return num * FirstFactorial(num-1);
}
console.log(FirstFactorial(8));

// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num){
    if (num === 0){
        return 0;
    }
    return num + SimpleAdding(num-1);
}
console.log(SimpleAdding(6));

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

function LetterCapitalize(str){
//     var caps = "";
//     caps += str.charAt(0).toUpperCase() + str.slice(1);
//     return caps;
// }
// console.log(LetterCapitalize('hello world'));
    return str.replace(/\w\S*/g,
//          // / Is the beginning of a regex (regular expression). The \w looks for all word characters in a string. A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character. The \S is any character that is NOT a whitespace character. \s(lowercase) is for whitespace characters. The * is a character that says to look for n zero or more times, where n is the metacharacter(the backslash tokens in the regex) in the regex.
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(LetterCapitalize('i have three cats')); 
//need to understand this further...

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr){
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++){
        temp += i;
    }
    return (temp);
}
console.log(rangeRover([2,8]));

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.
