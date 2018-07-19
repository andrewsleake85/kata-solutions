//this program just writes some common math
//functions  that already exist as an excercise

var sample_0 = 54.17;
var sample_1 = 56.51;

Math.round = function(number) {
  if (number % 1 >= .5)
  {
    
  return Number(number.toFixed(0))
    };
  if (number % 1 < .5)
  {return Number(number.toFixed(0))};
  
  
  // TODO: fix this
};

Math.ceil = function(number) {
if ( Number(number.toFixed(0)) < number)
  {return Number((number+1).toFixed(0))}
  
  return Number(number.toFixed(0)); // TODO: fix this
};

Math.floor = function(number) {
if ( Number(number.toFixed(0)) > number)
  {return Number((number-1).toFixed(0))}
  
  return Number(number.toFixed(0)); // TODO: fix this
};


console.log(Math.round(sample_0));
console.log(Math.round(sample_1));

console.log(Math.ceil(sample_0));
console.log(Math.ceil(sample_1));

console.log(Math.floor(sample_0));
console.log(Math.floor(sample_1));

