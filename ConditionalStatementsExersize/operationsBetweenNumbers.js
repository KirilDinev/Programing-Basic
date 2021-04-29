function operationBetweenNumbers(firstNumber, secondNumber, operator) {
    let firstNum = Number(firstNumber);
    let secondNum = Number(secondNumber);

    switch (operator) {
        case "+":
            if((firstNum + secondNum) % 2 === 0){
                console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum} - even`);
            } else{
                console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum} - odd`);
            }
            break;

        case "-":
            if((firstNum - secondNum) % 2 === 0){
                console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum} - even`);
            } else{
                console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum} - odd`);
            }
            break;
        case "*":
            if((firstNum * secondNum) % 2 === 0){
                console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum} - even`);
            }else{
                console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum} - odd`);
            }
            break;
        case "/":
                if(secondNum === 0){
                    console.log(`Cannot divide ${firstNum} by zero`);
                } else {
                console.log(`${firstNum} / ${secondNum} = ${(firstNum / secondNum).toFixed(2)}`);
                }
            break;
        case "%":
            if(secondNum === 0){
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                console.log(`${firstNum} % ${secondNum} = ${(firstNum % secondNum).toFixed(2)}`);
            }
            break;
    }


}
operationBetweenNumbers("10",
"3",
"%");