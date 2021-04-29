function accountBalance(arreayOfMoney){
    index = 0;
    let totalSum = 0;
    while(arreayOfMoney[index] !== "NoMoreMoney"){
        let firstSum = Number(arreayOfMoney[index])
        if(firstSum < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${firstSum.toFixed(2)}`);
        totalSum += Number(arreayOfMoney[index]);
        index++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"]);