//Create a function that converts a string into an integer.

//Created a map to convert the strings into integers on an array.
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

//Create a way to get basic numbers from a string.
function basicNumbers(number) {
    return numberMap[number]
    
    //Used a ternary operator to add a quick conditional statement.
            ? numberMap[number]
            : number.split('-').map(x => numberMap[x]).reduce((before, after) => before + after, 0);
}

//Create a way to get numbers that involves combining strings into integers.
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