//this program takes a string and encodes it into
//the ROT13 format by replacing a character with the 
//character 13 places ahead of it while preserving case
//no input validation


var sample_0 = "Hello This Is A Test";
var sample_1 = "ANOTHER TEST";
var sample_2 = "onemoretest";



function rot13(message){

var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var encoded = "";

for(let i = 0; i < message.length; i++)
  {
    
    if(alphabet.indexOf(message[i].toLowerCase()) == -1)
      {
        encoded += message[i];
      }
    else if(message[i] == message[i].toLowerCase()) 
      {
        //console.log("checking lower : " + alphabet.indexOf(message[i]));
        encoded += alphabet[alphabet.indexOf(message[i]) + 13];
      }
    else if (message[i] == message[i].toUpperCase()) 
      {
        //console.log("checking upper : " + alphabet.indexOf(message[i]));
        encoded += alphabet[alphabet.indexOf(message[i].toLowerCase()) + 13].toUpperCase();
      }
   }
  return encoded;


}


console.log(rot13(sample_0));
console.log(rot13(sample_1));
console.log(rot13(sample_2));