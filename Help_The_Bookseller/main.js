function stockList(listOfArt, listOfCat){

if(listOfArt.length === 0 || listOfCat === 0){
  return "";
  
  }

let stockCounter = {};

for(let i=0;i<listOfArt.length;i++){
  let parts = listOfArt[i].split(" ");
  let category = parts[0][0];
  let number = +parts[1];

  if(!stockCounter[category]){
    stockCounter[category] = number;
  } else {
    stockCounter[category] += number;
  }
} 

let result = [];
for(let i = 0;i<listOfCat.length;i++){
  let number;
  let category = listOfCat[i];
  if(stockCounter[category]){
    number = stockCounter[category].toString();
  } else{
    number = "0";
  }
  
  result.push("(" + category + " : " + number + ")");

}
  
  
return result.join(" - ");  
  
  
}