function minNumber(number){
let lowestNum = number[0];

    for(let i = 0; i < number.length; i++){
        if(number[i] < lowestNum){
            lowestNum = number[i];
            console.log(lowestNum);
        }

    }
}
minNumber(["2",
"100",
"99"]);