//this script find if an investment can last a certain number of years or not
// f0 = intital investment, p is positive interest
//c0 = how much he is taking out, and i is inflation (raises what he needs to take out)
//and n is how many years we are testing

let f0 = 100000;   //initial investment
let p = 1;         // gains 1 % on the capital
let c0 = 10000;    // takes out 10k a year
let n = 10;        // can it last 10 years?
let i = 1;         // 1% inflation


function fortune(f0, p, c0, n, i) {
    let years = 0;
    while(f0 > 0 && years < n){
      f0 = Math.floor((f0 + (f0*(p/100))) - c0);
      c0 = Math.floor(c0 + (c0 * (i/100)));
      years++;
    }
    if(years >= n){
      return true;
    } else {
      return false;
    }
}

//true , it can
console.log(fortune(f0, p, c0, n, i));