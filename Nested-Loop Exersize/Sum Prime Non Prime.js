function sumPrimeNonPrime(input){
    let index = 0;
    let firstNum = Number(input[index]);
    index++;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while(firstNum !== "stop"){
        let firstNumber = Number(firstNum);
        let sumDivide = 0;
        if(firstNumber < 0){
            console.log("Number is negative.");
            firstNum = (input[index]);
            index++;
            continue;
        } else {
            for(let i = 1; i <= firstNumber; i++){
                if(firstNumber % 1 === 0){
                    sumDivide += 1;
                }
            }
        }
        if(sumDivide === 1 + firstNumber){
            sumPrime += firstNumber
        } else {
            sumNonPrime += firstNumber;
        }
        firstNum = (input[index]);
        index++;

        if(firstNum === "stop"){
            break;
        }
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime([
    "3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
]);