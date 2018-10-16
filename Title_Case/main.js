//this script converts strings into title case, not counting excluded words

let exTitle = 'a clash of KINGS';
let exMinWords =  'a an the of';

function titleCase(title, minorWords) {
  if(!title){
    return "";
  }
  let first = true;
  let words = title.split(" ");
  let exceptions = (minorWords ? minorWords.toLowerCase().split(" "): "");
  let result = [];
  for(let i =0; i<words.length;i++){
    let current = words[i];
    if(!matches(current,exceptions) || first){
      result.push(current[0].toUpperCase() + current.slice(1).toLowerCase());
      first = false;
    } else {
      result.push(current.toLowerCase())
    }
  }
  return result.join(" ");
}

function matches(word,exceptions){
  for(let i = 0;i<exceptions.length;i++){
    if(word.toLowerCase() === exceptions[i]){
      return true;
    }
  }
  return false;
}

console.log(titleCase(exTitle,exMinWords));