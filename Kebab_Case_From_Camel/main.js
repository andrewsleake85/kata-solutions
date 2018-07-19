//this script turns a camelCaseWord into a kebab-case-word


var sample_0 = "thisIsACamelCaseWordOrSentenceWhatever";

function kebabize(str) {
  var strArr = [];
  
  var newStr = str.replace(/[0-9]/g, "");
  
  strArr = newStr.split(/(?=[A-Z])/);
  
  return strArr.join("-").toLowerCase();
  
  
  //console.log(strArr);
    
}

console.log(kebabize(sample_0));