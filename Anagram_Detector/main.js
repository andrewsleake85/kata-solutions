//this script takes two one-word strings and checks to see if they are anagrams
//that is they have the same number of each letter
// ex.  aaabbb  is an anagram of ababab
//no real input validation, but does force lowercase

var sample_0_0 = "helloisthisananagram";
var sample_0_1 = "anagramthisisanhello";

var sample_1_0 = "nopenotreally";
var sample_1_1 = "goodluck";




var isAnagram = function(test, original) {


//make them all lowercase
test = test.toLowerCase();
original = original.toLowerCase();

//two new objects
let c1 = {};
let c2 = {};

//read how many of each letter into key:values for the test
for(let i = 0; i < test.length;i++)
  {
    if (!c1[test[i]]) c1[test[i]] = 1;
    else c1[test[i]] += 1;
  }
 
//read how many of each lettt into key:values for original 
console.log(c1);
for(let i = 0; i < original.length;i++)
  {
    if (!c2[original[i]]) c2[original[i]] = 1;
    else c2[original[i]] += 1;
  }

//test that everything in test in in original, if its not return false
console.log(c2);
for (let i =0; i < test.length;i++)
  {
    if (!(c1[test[i]] === c2[test[i]])) return false;
  }
 
//test that everything in original is in  test , if its not return false
for (let i =0; i < original.length;i++)
  {
    if (!(c1[original[i]] === c2[original[i]])) return false;
  }
  
//true if we made it this far
return true;
}


console.log(isAnagram(sample_0_0,sample_0_1));  //expects true

console.log(isAnagram(sample_1_0,sample_1_1));  //expects false