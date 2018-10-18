//ths script sorts the inner content of words in a string in descending order
//note that some words will not change, like "that"

let ex = "These are all words that could progressively expand";

function sortTheInnerContent(words){
  console.log(words);
  let allWords = words.split(" ");
  let sortedWords = [];
  for(let i=0;i<allWords.length;i++){
    let word = allWords[i];
    let len = word.length;
    if(len < 2){
      sortedWords.push(word);
    } else {
      sortedWords.push(word[0] + word.substring(1,len-1).split("").sort().reverse().join("") + word[len-1]);
    }
  }
  return sortedWords.join(" ");
}

console.log(sortTheInnerContent(ex));