//this program simply checks if a string contains
//all the letters of the alphabet. it makes the string into lowercase
//from the input as well to make caps a non issue



var sample_0 = "The quick brown fox jumps over the lazy dog";  //true
var sample_1 = "The quick brown fox jumps over the lazy cat";  //false, no d

function isPangram(string){
 string = string.toLowerCase();

if( string.includes("a") && string.includes("b") && string.includes("c")&& string.includes("d")&& string.includes("e")&& string.includes("f")&& string.includes("g")&& string.includes("h")&& string.includes("i")&& string.includes("j")&& string.includes("k")&& string.includes("l")&& string.includes("m")&& string.includes("n")&& string.includes("o")&& string.includes("p")&& string.includes("q")&& string.includes("r")&& string.includes("s")&& string.includes("t")&& string.includes("u")&& string.includes("v")&& string.includes("w")&& string.includes("x")&& string.includes("y")&& string.includes("z")) return true;
  
return false;

  
}


console.log(isPangram(sample_0));
console.log(isPangram(sample_1));