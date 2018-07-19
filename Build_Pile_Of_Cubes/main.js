//this script returns the N such that the cube at the bottom has volue of N^3 
//and the ones about it are n-1 ^3 so all added up make the input
// returns -1 if no valid perfect cube


var sample_0 = 9;
var sample_1 = 1071225;
var sample_2 = 11;


function findNb(m) {
    // your code
    var result = 0;
    var start = 1;
    
    while (result < m)
    {
      result += Math.pow(start,3);
      start++;
    }
    
    if (result === m) return start - 1;
    else return -1;
}

console.log(findNb(sample_0)); // 2*2*2 = 8 + 1*1*1 =  9
console.log(findNb(sample_1)); //45*45*45 + 44*44*44... = 1071225
console.log(findNb(sample_2)); //  -1