//creats phone number from 10 digit string

function createPhoneNumber(numbers){
    let n = numbers;
    let areaCode = "" + n[0] + n[1] + n[2];
    let nextThree = "" + n[3] + n[4] + n[5];
    let lastFour = "" + n[6] + n[7] + n[8] +n[9];
   return "(" + areaCode + ") " + nextThree + "-" + lastFour;
}