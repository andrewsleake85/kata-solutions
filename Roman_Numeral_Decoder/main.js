//converts roman numerals into integers

let ex1 = "MDCCLXXV";

function solution(roman)
{
  var values = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var count = 0;

  for(let i = 0; i < numbers.length; i++){
    if(values[numbers[i]] < values[numbers[i+1]]){
      count+= values[numbers[i+1]] - values[numbers[i]];
      i++;
      } else {
        count += values[numbers[i]];
    }
  }  
  return count;
}

console.log(solution(ex1));