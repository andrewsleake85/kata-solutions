//tkaes a positive num and returns in multiplicative persistance..
//how many times you multiply its digits on itself until its one digit

let ex1 =999;

function persistence(num) {

  function multiplyDigitsAndCount(number,count){
    if(number < 10) {
      return count;
    } else{
    let digits = number.toString().split("");
    let newNumber = 1;
    digits.forEach(function(x) { newNumber = newNumber * x});
    count++;
    return multiplyDigitsAndCount(newNumber, count);   
    }
  }
  return multiplyDigitsAndCount(num, 0);
}
// because 3*9 = 27, 2*7 = 14, 1*4=4
console.log(persistence(ex1));