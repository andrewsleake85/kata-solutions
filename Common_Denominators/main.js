//this script converts a bunch of fractions into fractions with common denominators

let ex1 = [(1, 2), (1, 3), (1, 4)];
let ex2 = [(1, 5), (1, 10), (1, 12)];

function convertFrac(lst){
  let denoms = [];
  let nums = [];
  lst.forEach(function(x) { denoms.push(x[1]); nums.push(x[0]); });
  let commonMultiple;
  for(let i = 1;i<denoms.length;i++){
    if(commonMultiple){
      commonMultiple = leastCommonMultiple(commonMultiple,denoms[i]);
    } else {
      commonMultiple = leastCommonMultiple(denoms[i-1],denoms[i]); 
    }
  }
  let result = "";
  for(let i=0;i<nums.length;i++){
    nums[i] = (nums[i] * commonMultiple) / denoms[i]; 
    result = result + "(" + nums[i] + "," + commonMultiple + ")";
  }  
  return result;
}

function highestCommonFactor(a, b) {
    if (b === 0) {
        return a;
    }
    return highestCommonFactor(b, a%b);
}


function leastCommonMultiple(a,b) {
    return a*b/(highestCommonFactor(a,b));
}

console.log(convertFrac(ex1));
//console.log(convertFrac(ex2));