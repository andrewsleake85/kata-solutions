//this script transforms a string into pig latin, ignoring punctuations

let example = 'Pig latin is cool !';

function pigIt(str){
  return str.split(" ").map(function(x) {
    if (x !== "!" && x !== "?"){
      return x.slice(1) + x[0] + "ay";
    } else {
      return x;
    }
  }).join(" ");
  
}

//expeccts igPay atinlay siay oolcay !
console.log(pigIt(example));