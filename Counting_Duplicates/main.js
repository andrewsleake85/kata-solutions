

//this program sorts a string, int , or mixed array into a result Object that can return how many of each were in the input array

var poop = function (){ return "smells"; }
var strArr = ["hi", "hello", "poop", "leeroy","jim", "nancy","hi"];
var intArr = [3,6,9,35,76,356,6,999,4,6,343,343,23,534,62,6343,125,343,343,343,343,343,3];
var mixedArr = [3, 6, "hi", poop, 7, 9, 19834, "poop", 18, 31.512, "jim", "nancy",6]; 
var resultArr = [];
var resultObj = {};
var bin = 343;

//first test on just ints with arrays

for(let i = 0;i<intArr.length;i++)
    {
    if(!resultArr[intArr[i]])
        {
        console.log(resultArr[intArr[i]]);
        resultArr[intArr[i]] = 1;
        }
    else 
        {
        console.log("reached else");
        resultArr[intArr[i]] += 1;
        }
    }

console.log("there are " + resultArr[bin] + " instances of " + bin );


//awesome now lets try it with strings on an object

/*
for(let j =0;j<strArr.length;j++)
    {
    if(!resultObj[strArr[j]])
        {
        resultObj[strArr[j]] = 1;
        }
    else
        {
        resultObj[strArr[j]] += 1;
        }
    }
 
 
console.log(resultObj);

*/
for(let j =0;j<mixedArr.length;j++)
    {
    if(!resultObj[mixedArr[j]])
        {
        resultObj[mixedArr[j]] = 1;
        }
    else
        {
        resultObj[mixedArr[j]] += 1;
        }
    }
 console.log(resultObj);
 
console.log(poop());