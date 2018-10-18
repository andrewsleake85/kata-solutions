//This calculator takes values that could be written in a browsers route path as a single string. 
//It then returns the result as a number (or an error message).
//Route paths use the '/' symbol so this can't be in our calculator. 
//Instead we are using the '$' symbol as our divide operator.
//You will be passed a string of any length containing numbers and operators:
//= subtract
//'*' = multiply
//'$' = divide
//Your task is to break the string down and calculate the expression using this order of operations. 
//(division => multiplication => subtraction => addition)


let ex1 = '1000$2.5$5+5-5+6$6';

function calculate(sum){

  function checkValid(sum){
    let validOperators = '+-*$';
    let validNumbers = '.0123456789';
    for(let i =0; i<sum.length;i++){
      if(!validOperators.includes(sum[i]) && !validNumbers.includes(sum[i])){
        return '400: Bad request';
      }
    }
    return false;
  }
  
 
  function evaluate(num1, num2, op){
  let answer = num1;
    switch(op){
          case '+': answer = answer + num2;
                    break;
          case '-': answer = answer - num2;
                    break;
          case '*': answer = answer * num2;
                    break;
          case '$': answer = answer / num2;
                    break; 
              }
      return answer.toString();
  }
  
  
  function linearEval(sum){
    let operations = [];
    let numbers = [];
    let validOperators = '+-*$';
    let validNumbers = '.0123456789';
    
    for(let i =0; i<sum.length;i++){
      if(validOperators.includes(sum[i])){
        operations.push(sum[i]);        
      } else if (validNumbers.includes(sum[i])){
        let current = Number.parseFloat(sum.slice(i));
        numbers.push(current);
        let length = current.toString().length;
        i = i + length - 1;
        }
    }

    let answer = numbers[0];
    
    for (let i = 1;i<numbers.length;i++){
      let op = operations[i-1];
      switch(op){
        case '+': answer = answer + numbers[i];
                  break;
        case '-': answer = answer - numbers[i];
                  break;
        case '*': answer = answer * numbers[i];
                  break;
        case '$': answer = answer / numbers[i];
                  break; 
      }
    }
    return answer;
  }  
  
  let result = checkValid(sum);
  if (result){
    return result;
  }
  
  let validOperators = '+-*$';
  let prioOperand1 = "*";
  let prioOperand2 = "$";
  let prioOperands = "$*";
  let validNumbers = '.0123456789';
  
  let hasAddition = sum.includes("+");
  let hasSubtraction = sum.includes("-");
  let hasMultiplication = sum.includes("*");
  let hasDivision = sum.includes("$");
  
  if(!hasAddition && !hasSubtraction && !hasDivision && !hasMultiplication){
    return Number.parseFloat(sum);
  } else if (!hasAddition && !hasSubtraction) {
    return linearEval(sum);
  } else if (!hasMultiplication && !hasDivision) {
    return linearEval(sum);
  }
  
  
  while(sum.includes(prioOperand1) || sum.includes(prioOperand2)){
    let firstNum;
    let firstNumPos;
    let secondNum;
    let secondNumEndPos;
    let operand;
    for(let i =0; i<sum.length;i++){     
      let current = sum[i];
      let strAtPos = sum.slice(i);  
      if(validNumbers.includes(current)){
         if(!firstNum){
           firstNum = Number.parseFloat(strAtPos);
           firstNumPos = i;
           let length = firstNum.toString().length;
            i = i + length - 1;
         } else if (!secondNum){
           secondNum = Number.parseFloat(strAtPos);
           let length = secondNum.toString().length;
            i = i + length - 1;
            secondNumEndPos = i+1;
         }
       } else if (validOperators.includes(current)){
         if(!operand){
           operand = current;
         } 
       }     
      if(firstNum && secondNum && (operand === prioOperand1 || operand === prioOperand2)){    
        let answer = evaluate(firstNum,secondNum,operand);        
        sum = sum.slice(0,firstNumPos) + answer + sum.slice(secondNumEndPos);        
        firstNum = undefined;
        firstNumPos = undefined;
        secondNum = undefined;
        secondNumEndPos = undefined;
        operand = undefined;
        break;
      } else if ( firstNum && secondNum && operand){
        firstNum = secondNum;
        firstNumPos = secondNumEndPos - secondNum.toString().length;
        secondNum = undefined;
        secondNumEndPos = undefined;
        operand = undefined;
      }
    }    
  }
 
  return linearEval(sum);
 
}
  
  console.log(calculate(ex1));