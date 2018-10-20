/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getFunction(sequence) {
 
  let m = isLinear(sequence);
  if (m === false){
    return 'Non-linear sequence';
  } 
 
  function isLinear(values){
    let diff1 = values[4]-values[3];
    let diff2 = values[3]-values[2];
    let diff3 = values[2]-values[1];
    let diff4 = values[1]-values[0];
    
    if(diff1 === diff2 && diff3 === diff4 && diff2 === diff3 && diff1 === diff4){
      return diff1;
    } else {
      return false;
    }
  }

  function getB(fZero){
    if (fZero === 0){
      return 0;
    } else {
      return fZero;
    }
  }
  
  let b = getB(sequence[0]);
  let equation = function(x){ return (m*x) + b};
  return equation;
}