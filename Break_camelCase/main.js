//this script breaks up camel cased strings

let ex1 = "thisIsACamelCaseString";
let ex2 = "onlyPartofthisstringisCamelcased";
function solution(string) {
  let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let words = [];
  let start = 0;
  for(let i=0;i<string.length;i++){
    if(uppers.includes(string[i])){
      words.push(string.substring(start,i));
      start = i;
    }
  }
  words.push(string.substring(start));
  return words.join(" ");  
}

console.log(solution(ex1));
console.log(solution(ex2));