//this script checks if a bunch of words in an array is an anagram of a given word and returns them as a list

let word = 'abba';
let ex1 = ['aabb', 'abcd', 'bbaa', 'dada'];

function checkKeys(obj,orig){
  for(var key in obj){
        if(obj[key] !== orig[key]){
          return false;
        }
      }
  return true;
}

function anagrams(word, words) {
  let wordLetterCounts = {};
  let letters = word.split("");
  letters.forEach(function(x) { wordLetterCounts[x] = (wordLetterCounts[x] || 0)+1});
  let answers = [];
  for(let i = 0;i<words.length;i++){
    let cWL = words[i].split("");
    let cWLC = {};   
    cWL.forEach(function(x) { cWLC[x] = (cWLC[x] || 0)+1});
    if(checkKeys(cWLC,wordLetterCounts)){
      answers.push(words[i]); 
    }
  }
  return answers;
}

console.log(anagrams(word, ex1));