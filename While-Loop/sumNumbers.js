function sumNumbers(arreayOfNums){
    index = 0;
    let goal = Number(arreayOfNums[index]);
    index++;
    let totalSum = Number(arreayOfNums[index]);
    index++;
    while(totalSum < goal){
        totalSum +=
        totalSum = Number(arreayOfNums[index]);
        index++;
    }
    console.log(totalSum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"]);