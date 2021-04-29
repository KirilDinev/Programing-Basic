function numbersDivisibleByNine(numOne, numTwo){
    let numA = Number(numOne);
    let numB = Number(numTwo);
    let result = 0

    for(i = numA; i <= numB; i++){
        if(i % 9 === 0){
            result += i;
        }
    }
    console.log(`The sum: ${result}`);

    for(let n = numA; n <= numB; n++){
        if(n % 9 === 0){
            console.log(n);
        }
    }
}
    numbersDivisibleByNine("100", "200");