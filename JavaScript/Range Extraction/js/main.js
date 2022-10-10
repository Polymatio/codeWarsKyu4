// Create a function to extract the range
// Assign size to use length method to return a number of arrays and assign box into an empty an array
// Assign variable to be i and j
// For loop will be used to use the push method if i is less than the size
// Added another for loop for j to be assigned as i + j so if j less than the size and list[j] is equal to list[j-1] + 1
// conditional if statement for i being the same as j to push a comma or else if push a comma if there is a number gap otherwise add a dash if the number listing in the array is more then 3
// Will use pop to change the elements length of the array
// Return the array using the join method to return the elements into the array

function solution(list) {
    let size = list.length;
    let box = [];
    var i, j;
   
    for (i = 0; i < size; i = j + 1) {
      box.push(list[i]);
   
      for (var j = i + 1; j < size && list[j] == list[j-1] + 1; j++);
      j--;
   
      if (i == j) {
        box.push(",");
      } else if (i + 1 == j) {
        box.push(",", list[j], ",");
      } else { 
        box.push("-", list[j], ",");
      }
    }
    box.pop();
    return box.join("");
  }