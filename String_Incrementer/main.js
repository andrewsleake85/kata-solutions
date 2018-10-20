//this script takes a string and increments the number on the end, or adds a number to the end

let ex1 = "zomebie00054";
let ex2 = "hello world";

function incrementString (strng) {
console.log(strng);
  let numbers = "0123456789";
  let num;
  let index;
    for(let i = strng.length-1;i>=0;i--){
      if(!numbers.includes(strng[i])){
        index = i;
        num = strng.slice(i+1);
        return strng.slice(0,i+1) + increaseNum(num);
      }  
    }   
    return increaseNum(strng).toString();
}

function increaseNum(num){
if(!num) return 1;
  let len = num.length;
  num = Number.parseInt(num) + 1;
  if(num.toString().length < len){
    let numZeroes = len - num.toString().length;
    let temp = '0'.repeat(numZeroes);
    return temp+num;
  }
  return num;
}  

console.log(incrementString(ex1));
console.log(incrementString(ex2));
