function multiplicationTable(){
    for(firstNum = 1; firstNum <= 10;firstNum++){
        for(secondNum = 1; secondNum<= 10; secondNum++){
            console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        }
    }
}
multiplicationTable();