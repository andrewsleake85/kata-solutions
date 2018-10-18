//checks if there are valid braces and parens in a string


function validBraces(braces){
 let obj = {
 '(':')',
 ')':'(',
 '{':'}',
 '}':'{',
 '[':']',
 ']':'[',
 };
  if(braces.length % 2 !== 0){
    return false;
  }
  let stack = [];
  for(let i = 0; i<braces.length;i++){
    let cur = braces[i];
    if(cur === '(' || cur  === '{' || cur  === '['){
      stack.push(cur);
    } else if ( cur === ')' || cur  === '}' || cur  === ']'){
        if(stack[stack.length - 1] === obj[cur]){
          stack.pop();
        }
    }
  }
  if(stack.length === 0){
    return true;
  } else {
    return false;
  }
  
}