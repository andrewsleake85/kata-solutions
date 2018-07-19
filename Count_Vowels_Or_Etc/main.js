//counts the vowels in a string
//easily modified to count anything you want in a string
//no input validation, expects only lowercase letters. again
//easy to modify



var sample_0 = "this is a string of a bunch of words that have some vowels here and there and @)**#&$#^%# some punctuation";

function getCount(str) {
  var vowelsCount = 0;
  const vowels = "aeiou";
  
  for(let i =0; i<str.length;i++)
    {
      if (vowels.includes(str[i])) vowelsCount++
    }
  
  
  return vowelsCount;
}


console.log(getCount(sample_0)); //expects 29