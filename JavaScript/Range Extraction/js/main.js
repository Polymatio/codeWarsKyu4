//Create a function to extract the range

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