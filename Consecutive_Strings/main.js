//this script finds the longest total string of adjacent strings given by k
//  #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"


let ex1 = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];

function longestConsec(strarr, k) {
  let len = strarr.length;
  let longest;
  if(len === 0 || k > len || k<=0) return ""; 
  for(let i = 0;i<len;i++){
  let aString = "";
    for(let j = i;j<i+k;j++){
      if(strarr[j]){
        aString = aString + strarr[j];
      }
      if(!longest){
      longest = aString;      
      } else if( aString.length > longest.length){
      longest = aString;
      }
    }
  }
    return longest;
}

console.log(longestConsec(ex1,2));