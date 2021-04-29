function equalSumsEvenOddPosition(input){
let firstSum = Number(input[0]);
let secondSum = Number(input[1]);
let output = "";

for(let i = firstSum; i <= secondSum; i++){
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;

    for(let y = 0; y <= currentNum.length; y++){
        let currentDigit = Number(currentNum.charAt(y));
        if(y % 2 === 0){
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }
    if(oddSum === evenSum){
        output += `${i} `;
    }
}
console.log(output);
}
equalSumsEvenOddPosition(["100000",
"100050"]);