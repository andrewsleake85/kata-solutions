//this script takes an array or list of integers and treutnr the 
// first two valus in order of appearance that line up to form the sum


var sample_1 = [4, 3, 2, 3, 4];
var sample_2 = [10, 5, 2, 3, 7, 5];

var sum_1 = 6;
var sum_2 = 10;


var sum_pairs=function(ints, s){

 //make an object seen
   var seen = {};
  //loop through every integer  in ints
   for (var i = 0; i < ints.length; i++) {
     //if the object has a key of [[s -ints[i]]  that is the sum we want - a given integer, we return  that value and the current integer
     if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
     //if not, make a new key of the given integer true
     seen[ints[i]] = true;
     //quite a clever solution, I had to look this one up :(
     //console.log(seen);
   }
 };
 
 
 //expected [4,2]
console.log(sum_pairs(sample_1,sum_1));

//expected [3,7]
console.log(sum_pairs(sample_2,sum_2));