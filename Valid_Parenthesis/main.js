//this script checks a string of anything and checks if the parenthesis are valid, 
// or opened and closed properly


let ex1  = ")(()))";
let ex2 = "(())((()())())" ;

function validParentheses(parens){
  let eachP = parens.split("");
  let result = [];
  for(let i = 0 ;i<eachP.length; i++){
    if(result[result.length-1] === '(' && eachP[i] === ')'){
      result.pop();
    } else {
      result.push(eachP[i]);
    }
  }
  return (result.length === 0 ? true : false); 
  
}

console.log(validParentheses(ex1));
console.log(validParentheses(ex2));