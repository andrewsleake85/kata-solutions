//this script reverses the words in a sentence and returns the same sentence 
//with the words reversed but same order


var sample_0 = "This is actually NOT! a craz_y difficult S-S-Script ";

function reverseWords(str) {
  
  var words = str.split(" ");
  var revWords = [];
  var postRev = [];
  
  
  for(let i = 0; i<words.length;i++)
   {
     revWords[i] = words[i].split("");
     revWords[i].reverse();
  }
  
  for(let j = 0; j< revWords.length;j++)
    {
      postRev[j] = revWords[j].join("");
    }
  
  return postRev.join(" ");
}

console.log(reverseWords(sample_0));