
let data = ["John","James","Smith","01-Jan-2000","M"];
  
function driver(data) {
 /* 
  This script outputs UK drivers license data as a number per specifications
 
  example inputs

  data = ["John","James","Smith","01-Jan-2000","M"]
  data = ["Johanna","","Gibbs","13-Dec-1981","F"]
  data = ["Andrew","Robert","Lee","02-September-1981","M"]   
 
  https://www.codewars.com/kata/driving-licence/train/javascript
  */
  
  let firstName = data[0];
  let middleName = data[1];
  let surName = data[2];
  let birthInformation = data[3].split("-");
  let birthDay = birthInformation[0];
  let birthMonth = birthInformation[1];
  let birthYear = birthInformation[2];
  let sex = data[4];
  let fillerNumber = "9";          //designated by problem
  let computerCheckDigits = "AA";  //designated by problem
  let monthLookup = {
    JAN:"01",
    FEB:"02",
    MAR:"03",
    APR:"04",
    MAY:"05",
    JUN:"06",
    JUL:"07",
    AUG:"08",
    SEP:"09",
    OCT:"10",
    NOV:"11",
    DEC:"12"
    };
    

function findFirstFive (surName) { 
    surName = surName.toUpperCase();
    if(surName.length >= 5){
      return surName.slice(0,5);
    } else {
      while(surName.length < 5){
        surName = surName + fillerNumber;
      }
      return surName;
    }  
}

function findSeventhAndEighth (monthLookup, birthMonth, sex) {
   birthMonth = birthMonth.toUpperCase().slice(0,3);
   let monthNumber = monthLookup[birthMonth];
   if(sex === "M"){
    return monthNumber;
   } else {
    return (parseInt(monthNumber) + 50).toString();
   }
}

function findTwelfAndThirteenth (firstName, middleName){
  let firstInitial = firstName[0].toUpperCase();
  if(middleName.length < 1){
    return  firstInitial + fillerNumber; 
  } else {
    let middleInitial = middleName[0].toUpperCase()
    return firstInitial + middleInitial; 
  }
}  


let firstFive = findFirstFive(surName);
let sixth = birthYear[2];
let sevenAndEight = findSeventhAndEighth(monthLookup, birthMonth,sex);
let ninthAndTenth = birthDay;
let eleventh = birthYear[3];
let twelfAndThirteenth = findTwelfAndThirteenth(firstName, middleName);
let fourteenth = fillerNumber;
let fifteenAndSixteenth = computerCheckDigits;


return firstFive + sixth + sevenAndEight + ninthAndTenth + eleventh + twelfAndThirteenth + fourteenth + fifteenAndSixteenth;
  
}

console.log(driver(data));