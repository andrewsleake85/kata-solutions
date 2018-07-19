//this script replaces every Nth  character of text that is oldValue with newValue
//case sensitive so a !=== A 



var sample_0 = "What kind of sample should we make ? Always difficult to be creative with this awesome stuff !";


function replaceNth(text, n, oldValue, newValue) {

if (n <= 0) return text;


// replace a certain character at a certain index easily
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};


//count each occurance 
  let occurance = 0;
//loop over string replacing every Nth occurance of oldValue with newValue
  for(let i = 0;i<text.length;i++)
    {
      if(text[i] === oldValue)
        {          
          occurance ++;         
            if(occurance == n)
              {
                text = text.replaceAt(i,newValue);
                occurance = 0;   //resest occurance counter
              }
        }
    }

return text;
}


//replace every 2nd instance of "a" with "Z"
console.log(replaceNth(sample_0,2,"a","Z"));