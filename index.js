/*Faulty calculator 
   2 num input, wrong operations[only 10% of the time]:
      + -----> -             // 1 + 1 = 0
      * ------> +
      - ------> /
      / ------> ** (exponentiation)

      generate random no. between 1 and 100  
      check if no. is less than or greater than 10
*/
let random = Math.random();
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter operator: ");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);    
}
else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);    
}

// Method-1
// function faultyCalc(op, n1, n2) {
//     switch (op) {
//         case '+':
//             return n1 + n2 + (Math.random() - 10);
//             break;
//          case '-':
//             return n1 - n2 - (Math.random() / 10);
//             break;
//          case '*':
//             return n1 * n2 * (Math.random() + 10);
//             break;
//          case '/':
//             return n1 / n2 / (Math.random() ** 10);
//             break;
//         default:
//             return 'Invalid Entry';
//      }
// }

// function calculate() {
//     let op = prompt('enter an operand[+,-,*,/]:  ');
//     let n1 = parseInt(prompt('Enter number1:  '));
//     let n2 = parseInt(prompt('Enter number2:  '));
    
//     if (isNaN(n1) && isNaN(n2)) {
//         console.log("ERROR!!");
//     }
//     else {
//         let result = faultyCalc(op, n1, n2);
//         console.log(result);
//     }
        
// }

