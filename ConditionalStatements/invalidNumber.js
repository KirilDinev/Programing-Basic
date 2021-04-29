function invalidNumber(number){
    let num = Number(number);

    if(num < 100 && num > 200 && num !== 0){
        console.log("invalid");
    }
}
invalidNumber("199")
