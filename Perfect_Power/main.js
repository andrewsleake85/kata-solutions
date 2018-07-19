//this function finds out if there is a perfect power of i^j such that it equals n



var sample_0 = 1000;     // 10^3
var sample_1 = 124;      // doesn't exist
var sample_2 = 4084101;  //

var isPP = function(n){


for (var i = 2; i * i <= n; i++)
  {
    for (var j = 2; Math.pow(i, j) <= n; j++)
      {       
        if (Math.pow(i, j) === n) return [i, j];
      }
  }
  return null;
};


console.log(isPP(sample_0));
console.log(isPP(sample_1));
console.log(isPP(sample_2));
