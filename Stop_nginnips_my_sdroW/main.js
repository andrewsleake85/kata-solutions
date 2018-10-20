//reverses any words with 5 of more letters

let ex1 = " This is a sentence of longer words than I normally write";
function spinWords(str){
  let words = str.split(" ");
  let newSentence = [];
  words.forEach(function(x) 
                { if(x.length > 4) {
                  newSentence.push(x.split("").reverse().join(""));
                  } else { 
                  newSentence.push(x)
                  }
                }
              );
  return newSentence.join(" ");
}

console.log(spinWords(ex1));