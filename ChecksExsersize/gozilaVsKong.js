function gozilaVsKong(filmBudget, stastists, priceForOneStatist) {

    let budget = Number(filmBudget);
    let statistCount = Number(stastists);
    let priceForOne = Number(priceForOneStatist);
    let decor = budget - budget * 0.90;
    let cloutingPrice = statistCount * priceForOne;
    

    if(statistCount > 150){
        cloutingPrice = cloutingPrice - (cloutingPrice * 0.10);
       
    }

    let filmPrice = cloutingPrice + decor;

    if(filmPrice > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(filmPrice - budget).toFixed(2)} leva more.`);
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - filmPrice).toFixed(2)} leva left.`);
    }
}
gozilaVsKong("15437.62",
"186",
"57.99")