// Create a function to convert Roman Letters to Numerical Numbers and in vice versa
// Assigning RomanNumerals to an expression function for fromRoman
// Assigning map to define roman numerals to numeric numbers
// Assigning value to 0
// Conditional for loop if convert numbers into roman numerals and if statement false to return as null
// Return will be a number value
// Created another function expression for toRoman
// Assigning another map for toRoman function using roman numerals and numeric numbers
// Assigning roman to '' to return the roman numerals as a string
// Creating a while statement for value greater then 0 to assign a roman numeral
// Using r in map to represent the roman numeral in the array in the for loop
// Return will be a roman numeral

let RomanNumerals = {
    fromRoman: function(roman) {
      let map = {IV:4,IX:9,XL:40,XC:90,CD:400,CM:900,I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
      let value = 0;
      for (let i = 0; i < roman.length; i++) {
        let two = map[roman[i]+roman[i+1]], one = map[roman[i]];
        if (two != null) { value += two; i++; }
        else if (one != null) value += one;
      }
      return value;
    },
    toRoman: function(value) {
      let map = {M:1000,CM:900,D:500,CD:400,C:100,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
      let roman = '';
      while (value > 0) {
        for (let r in map) {
          if (map[r] <= value) {
            roman += r;
            value -= map[r];
            break;
          }
        }
      }
      return roman;
    }
  };