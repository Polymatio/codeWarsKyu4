// Create a function that finds the most frequently used word in a text
// Assigning regex to ".*[a-zA-Z].*"
// Creating a conditional to to count new words
// Assigning wordMap to be a new Map constructor to find a new word
// Using a forEach method to pick each individual word
// Using toLowerCase method to make the word count not be case sensitive
// Assigning count to wordMap to count the words and using Map.get method to return the word
// Using set method to store in the words and count
// Assigning sortedSwordMap to a new Map using spread syntax to expand individual elements and using the key and sort method to arrange the words
// assigning result to Array.from, keys, and filter method to help arrange the words
// Conditional will be used for finding special characters in the word
// Assigning response with replace method to help remove special characters in the word if necessary
// It will return the filter of the results and make sure if it is not a response to be undefined else return an empty array

function topThreeWords(text) {
    let regex = ".*[a-zA-Z].*";

    if(text.match(regex)) {
        let wordMap = new Map();
        text.split(' ').forEach(word => {
            if(word) {
                word = word.toLowerCase();
                if(wordMap.has(word)) {
                    let count = wordMap.get(word);
                    count ++;
                    wordMap.set(word, count);
                } else {
                    wordMap.set(word, 1);
                }
            }
        })
        
        const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));

        let result = Array.from(sortedWordMap.keys()).filter( (word, index) => index < 3);
        result = result.map(response => {
            response = response.replace(/[/.,]/g, '')
            if(response !== "") {
                return response
            }
        })
        return result.filter(response => response !== undefined)
    } else {
        return [];
    }
}