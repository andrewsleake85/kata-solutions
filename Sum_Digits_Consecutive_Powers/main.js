//this script finds numbers from a to b inclusive that
// follow this rule 8^1 + 9^2  =  8 + 81  = 89

let a = 0;
let b = 100;

function sumDigPow(a, b) {
  let result = [];
  for(let i = a;i<=b;i++){
    if(sumDigits(i) === i){
      result.push(i);
    }  
  }
  return result;
}

function sumDigits(num){
  let digits = (""+num).split("");
  let sum = 0;
  for(let i =0;i<digits.length;i++){
    sum += Math.pow(digits[i],i+1);
  }
  return sum;
}
//expects 0,1,2,3,4,5,6,7,8,9,89
console.log(sumDigPow(a,b));
