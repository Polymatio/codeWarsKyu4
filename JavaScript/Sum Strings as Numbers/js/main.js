//Create a function to represent a sum of two strings.
function sumStrings(a,b){
    a = BigInt(a);
    b = BigInt(b);
    return (a + b).toString();
}
console.log(sumStrings);