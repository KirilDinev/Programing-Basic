function fishingBoat(groupBudget, seson, fisherNumber) {
    let budget = Number(groupBudget);
    let sesonType = seson;
    let FisherCount = Number(fisherNumber);

    let summerPrice = 4200;
    let autumnPrice = 4200;
    let winterPrice = 2600;
    let springPrice = 3000;

    let price = 0;

    function colculateBoatDiscount (fishers){
        if (fishers % 2 === 0) {
            price = price * 0.95;
        }
    }

    function colculatePrice (ribari, cena, neEEsen){
        if (ribari <= 6) {
            price = cena * 0.90;
        } else if (ribari >= 7 && ribari <= 11) {
            price = cena * 0.85;
        } else {
            price = cena * 0.75;
        }

        if(neEEsen){
    colculateBoatDiscount (ribari);
            
        }
    }
    
    switch (sesonType) {
        case "Summer":
            colculatePrice(FisherCount, summerPrice, true)
            break;
        case "Autumn":
            colculatePrice(FisherCount, autumnPrice, false)
            break;
        case "Winter":
            colculatePrice(FisherCount, winterPrice, true)
            break;
        case "Spring":
            colculatePrice(FisherCount, springPrice, true)
            break;
    }

if (budget >= price){
    console.log(`Yes! You have ${ (budget - price).toFixed(2) } leva left.`);
}else {
    console.log(`Not enough money! You need ${ (price - budget).toFixed(2) } leva.`);
}

}
fishingBoat("2000",
"Winter",
"13");