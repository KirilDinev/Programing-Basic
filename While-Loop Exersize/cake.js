function cake(arrayOfCake){
    let index = 0;
    let width = Number(arrayOfCake[index]);
    index++;
    let length = Number(arrayOfCake[index]);
    index++;
    let cakeSize = width * length;
    let command = arrayOfCake[index];
    index++;
    sumOfcakes = 0
    while(command !== "STOP"){
        let cake = Number(command);
        sumOfcakes += cake;
        if(sumOfcakes >= cakeSize){
            console.log(`No more cake left! You need ${sumOfcakes - cakeSize} pieces more.`);
            break;
        }
        command = arrayOfCake[index];
        index++;
    }
    if(command === "STOP"){
        console.log(`${cakeSize - sumOfcakes} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);