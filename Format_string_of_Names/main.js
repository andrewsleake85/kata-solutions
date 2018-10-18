//this script formats an array of objects with the name property into a string that looks good

let ex1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'},{name: 'Homer'} ];

function list(names){
  let allNames = [];
  names.forEach(function(x) { allNames.push(x.name)});
  let last = allNames.pop();
   if(allNames.length === 0){
     if(last){
       return last;
     } else{
      return '';
     }    
  }  
  return allNames.join(", ") + " & " + last;  
}

console.log(list(ex1));

