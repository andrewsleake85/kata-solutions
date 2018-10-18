//this script converts a string to a new string where you convert each characters
//given if it appears ONLY once it becomes "("
//but otherwise it becomes ")"

let ex1 = "Success";
let ex2 = "recede";

function duplicateEncode(word){
  let charCounts = {};
  let letters = word.toLowerCase().split("");
  letters.forEach(function(x) { charCounts[x] = (charCounts[x] || 0)+1 });
  let result = "";
  for(let i = 0;i<letters.length;i++){
    if(charCounts[letters[i]] > 1){
      result = result + ")";
    } else if (charCounts[letters[i]] === 1){
      result = result + "(";
    } 
  }
  return result;
}

console.log(duplicateEncode(ex1));
console.log(duplicateEncode(ex2));
