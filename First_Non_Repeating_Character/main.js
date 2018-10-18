//this script takes a string input and retards the first characters that doesn't repeat 
//anywhere else in the string. case sensitive too for added challenge

let ex1 = "This is actually kind of hard";

function firstNonRepeatingLetter(s) {
  if(s.length <1){
    return '';
  }
  let realCounts = {};
  let forceLCCounts = {};
  for(let i=0;i<s.length;i++){
    let char = s[i];
    if(!realCounts[char] && char !== ' '){
      realCounts[char] = 1;
    } else if (char !== ' '){
      realCounts[char]++;
    }
  }
   for(let i=0;i<s.length;i++){
    let char = s[i].toLowerCase();;
    if(!forceLCCounts[char] && char !== ' '){
      forceLCCounts[char] = 1;
    } else if (s[i] !== ' '){
      forceLCCounts[char]++;
    }
  }
  let theletter;
  for(var key in forceLCCounts){
    if(forceLCCounts[key]===1){
      theletter = key;
      break;
    }
  } 
  if(!theletter) { return ''};
  let upper = (s.indexOf(theletter.toUpperCase()));
  let lower = (s.indexOf(theletter.toLowerCase()));
  let index = (upper > lower ? upper :lower)
  let theone = s[index];   
  return theone;
}

console.log(firstNonRepeatingLetter(ex1));