//this script takes possible pins and puts them all together. 
//essentially recurive substrings of any given length of string arrays


 let ex1 = "145";
 let ex2 = "83954";

function getPINs(observed) {
  let possible = {
    1:"124",
    2:"1253",
    3:"236",
    4:"1457",
    5:"24568",
    6:"3569",
    7:"478",
    8:"57890",
    9:"689",
    0:"80"
  };
  
  let runs = [];  
  for(let i = 0;i<observed.length;i++){
    let digit = observed[i];
    let others = possible[digit];
    let combos = [];
    for(let i = 0;i<others.length;i++){
      combos.push(others[i]);
    }
    runs.push(combos);
  }  
  let pins = getSubs(runs);
  return pins;
}

function getSubs(strArr){
  if(strArr.length === 2){
    let all = [];
    let current = strArr[0];
    let next = strArr[1];
    for(let i = 0; i<current.length;i++){
    let result = "";
      for(let k = 0;k<next.length;k++){
      result = current[i] + next[k];  
      all.push(result);
      }   
    } 
  return all; 
  } else if(strArr.length === 1){
    return strArr[0];
  } else if (strArr.length > 2){
    let all = [];
    let current = strArr[0];
    let next = getSubs(strArr.slice(1))
    for(let i = 0; i<current.length;i++){
    let result = "";
      for(let k = 0;k<next.length;k++){
      result = current[i] + next[k];  
      all.push(result);
      }   
    } 
  return all;
  }
}

console.log(getPINs(ex1));
console.log(getPINs(ex2));