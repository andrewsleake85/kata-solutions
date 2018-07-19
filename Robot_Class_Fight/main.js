//this program takes two robot objects and fights them to the death
//based on their speed who goes first, attack damage of the tactics uses\
// and the tactics they have 


 robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
 }
 
 robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile", "missile", "missile", "missile"]
 }
 
 tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 }



// fight function contains many console logs to track the fight


function fight(robot1, robot2, tactics) {
  // Who robot will Rock 'em, Sock 'em?!
  var faster;
  var slower;
  
   if (robot1.speed >= robot2.speed) 
     {
       faster = robot1;
       slower = robot2;
       }
    else
    {
       faster = robot2;
       slower = robot1;
    };
  
  var fasterTacs = faster.tactics;
  var slowerTacs = slower.tactics;
  var turn = 0;
  
  while(faster.health > 0 && slower.health > 0)
    {
      if (faster.tactics[turn])
        {
        let firstAttack = faster.tactics[turn];
        let firstAttackDamage = tactics[firstAttack];
        console.log(slower.name + " has the slower speed of " + slower.speed);
        console.log(slower.name + " has " + slower.health + " health ");
        console.log(slower.name + " took " + firstAttackDamage + " damage " );
        slower.health -= firstAttackDamage;
        console.log(slower.name + " now  has " + slower.health + " health after being attacked with " + firstAttack);
        
        }
      if (slower.health <= 0) return faster.name + " has won the fight.";         
        
      if (slower.tactics[turn])
        {
          let secondAttack = slower.tactics[turn];
          let secondAttackDamage = tactics[secondAttack];
          console.log(faster.name + " has the faster speed of " + faster.speed);
          console.log(faster.name + " has " + faster.health + " health ");
          console.log(faster.name + " took " + secondAttackDamage + " damage " );          
          faster.health -= secondAttackDamage;
          console.log(faster.name + " now  has " + faster.health + " health after being attacked with " + secondAttack);
        }
      if (faster.health <= 0) return slower.name + " has won the fight.";
      
      if (!faster.tactics[turn] && !slower.tactics[turn] && faster.health > 0 && slower.health > 0 )
        {
          if (faster.health > slower.health)
            {return faster.name + " has won the fight.";}
          else if (slower.health > faster.health)
            {return slower.name + " has won the fight.";}
          else if (faster.health == slower.health)
            {return "The fight was a draw.";}
        }
       turn++;
      
    }
    
    
    if (faster.health > 0) return faster.name + " has won the fight.";
    return slower.name + " has won the fight.";
  
}


console.log(fight(robot1, robot2, tactics));