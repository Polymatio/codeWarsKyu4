// Create a function to represent a sum of two strings
// Assign a, and b to BigInt a, and b to manipulate bigint values because BigInt is a primitive wrapper object
// Return a + b and use toString method to convert the number into a string

function sumStrings(a,b){
    a = BigInt(a);
    b = BigInt(b);
    return (a + b).toString();
}
console.log(sumStrings);