//this program takes a string and test if it passes a regex


var sample_0 ="dsj02jdsi";  // no uppercase letter, fails
var sample_1 ="sdsd"; //no uppercase letter and no numbers, fails
var sample_2= "dsdD9ddsdsdzzzzz"; // at least one upper, lower, number and at least 6 digits - passes


function validate(password) {


 
// ^ start of statement
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// No special characters or spaces [^\\s?!@$%^&*-;]   etc
// Minimum six char in length [A-Za-z0-9].{6,} (with the anchors)
// $ end of input
//console.log(password.length);
//console.log(password);


  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}



console.log(validate(sample_0));
console.log(validate(sample_1));
console.log(validate(sample_2));