
//this functin takes a lower case string
//and outputs a mexican wave version where each letter gets capitalized
//in sequence and returned in an array whilst ignoring but preserving whitespace
//also has a helper cleaner function to remove dead or nullspace



var sample_0 = "another";
var sample_1 = "hello testing";




function wave(input){
  
var waveArr =[];
  
  for(let i = 0; i< input.length;i++)
    {
      if (input[i] != " ") waveArr[i] = input.substring(0,i) + input[i].toUpperCase() + input.substring(i+1); 
    }
    
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};



waveArr.clean(undefined); 
 
 
 
    //console.log(waveArr);
  
  return waveArr;
  
  
}


console.log(wave(sample_0));
console.log(wave(sample_1));


