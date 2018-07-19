// builds a tower of n height




function towerBuilder(nFloors) {
  // build here
  var towerArr = [];
  var width = (nFloors * 2) - 1;
  var spaces;
  var platforms;
  var tempStr = "";
  const floor = "*";
  const spacer = " ";
  
  
  //figure out each floor
  for (let i = 1; i<= nFloors;i++)
    {
      spaces = (width  - ((i * 2 ) - 1)) * .5;
      //console.log("width is " + width);
      platforms = (i * 2) - 1;          
      //console.log("floor " + i + " has " + spaces + " spaces on each side and " + platforms + "  platform ");     
      //build each floor
      //console.log(towerArr);
      
      for (let sL = 0; sL < spaces; sL++)
        {tempStr += spacer;}
      
      for (let pL = 0; pL < platforms; pL++)
        {tempStr += floor;}
   
      for (let sL = 0; sL < spaces; sL++)
        {tempStr += spacer;}
        
        
      
      towerArr.push(tempStr);
      tempStr = "";
        
      
     
      
    }
  
    return towerArr;
}
    
    
console.log(towerBuilder(11));