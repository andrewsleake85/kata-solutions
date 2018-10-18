//this script converts a string to camel case on dash/underscored delimited


let ex1 = "the-stealth-warrior";

function toCamelCase(str){
  if(str.length <1){
    return '';
  }
  let firstWordCaps = (str[0] === str[0].toUpperCase() ? true : false);
  let words = str.split(/[-_]/);
  let result = "";  
  for(let i = 0;i<words.length;i++){
    let currentWord = "";
    if(i === 0 && !firstWordCaps){
      currentWord = words[i];
      result = result + currentWord;  
    } else {
      currentWord = words[i][0].toUpperCase() + words[i].slice(1);
      result = result + currentWord;    
    }
  }
  return result;
}

console.log(toCamelCase(ex1));