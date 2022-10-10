// Create a function that converts a string into an integer
// Assigning numberMap to convert the strings into integers into the array
// Making a function of basicNumbers to return basic numbers
// Will use ternary operator to add quick conditional statement
// Using the split, map, and reduce method to list the numbers and add it into a number
// Making another function for combinationNumbers to return complex numbers
// Assigning req to 0 as a base number and assigning numbers to numbers.filter to filter x not to use 'and' when combining numbers
// Added a conditional if statement for more then one string of numbers with 'hundred', 'thousand', and 'million' using the include method to determine if it is true or false in the array
// Also add conditionals for numbers around 'hundred', and 'thousand' individually otherwise return the req or basic numbers and return req combined numbers
// Making a function to convert strings into integers using the split method to divide the strings and return number.length one a single integer
// Will use ternary operator to add another quick statement to return basicNumbers and combinationNumbers

const numberMap = {
    'zero' : 0,
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9,
    'ten' : 10,
    'eleven' : 11,
    'twelve' : 12,
    'thirteen' : 13,
    'fourteen' : 14,
    'fifteen' : 15,
    'sixteen' : 16,
    'seventeen' : 17,
    'eighteen' : 18,
    'nineteen' : 19,
    'twenty' : 20,
    'thirty' : 30,
    'forty' : 40,
    'fifty' : 50,
    'sixty' : 60,
    'seventy' : 70,
    'eighty' : 80,
    'ninety' : 90,
    'hundred' : 100,
    'thousand' : 1000,
    'million' : 1000000
}

function basicNumbers(number) {
    return numberMap[number]
        ? numberMap[number]
        : number.split('-').map(x => numberMap[x]).reduce((before, after) => before + after, 0);
}

function combinationNumbers(numbers) {
    let req = 0;
    numbers = numbers.filter(x => x !== 'and');

    //Add a conditional statement for more then one word in the array.
    for(let i = 0, y = numbers.length; i < y;) {
        if(numbers[i + 1] && ['hundred', 'thousand', 'million'].includes(numbers[i + 1])) {
            const x = numbers[i + 1];
            
            //If statement for the condition around the hundreds and thousands.
            if ( x === 'hundred') {
                req += numberMap[numbers[i]] * numberMap[numbers[i + 1]];
            }else {
                req += basicNumbers(numbers[i]);
                req = req * numberMap[numbers[i + 1]];
            }
            i += 2;
            continue;
        }else if(numbers[i] === 'thousand') {
            req = req * numberMap['thousand'];
        }else {
            req += basicNumbers(numbers[i]);
        }
        i += 1;
    }
    return req;
}

//Create a way to convert from string to integer.
function parseInt (string) {
    let numbers = string.split(' ');
    return numbers.length === 1
            ? basicNumbers(numbers[0])
            : combinationNumbers(numbers);
}