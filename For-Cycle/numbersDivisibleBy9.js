function numbersDivisibleByNine(n, m){ 
    let numOne = Number(n);
    let numTwo = Number(m);
    let sum = 0;
    let string = "";

    for(let i = numOne; i < numTwo; i++){
        if(i % 9 === 0){
            sum += i;   
            string += i + " ";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(string);
}
numbersDivisibleByNine("100", "200");