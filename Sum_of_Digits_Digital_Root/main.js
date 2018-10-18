//this script gets the recursive sum of all the digits in a number...
// 587 -> 20 -> 2  = 2

let ex1 = 132189;

function digital_root(n) {
  if (n < 10){
    return n;
  } else {
  let count = 0;
  let digits = n.toString().split("");
  digits.forEach(function(x) {count += +x});
  return digital_root(count)
  }
}

console.log(digital_root(ex1));