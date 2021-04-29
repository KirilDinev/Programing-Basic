function cleverLili(lilysAge, price, singlePrice) {
    let age = Number(lilysAge);
    let mashinePrie = Number(price);
    let singleToyPrice = Number(singlePrice);
    let sevedMoney = 0;
    let toysCounter = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sevedMoney += (money - 1);
            money += 10;
        } else {
            toysCounter ++;
        }
    }
    let toysSum = toysCounter * singleToyPrice;
    let totalSum = sevedMoney + toysSum;

    if (totalSum >= mashinePrie) {
        console.log(`Yes! ${(totalSum - mashinePrie).toFixed(2)}`);
    } else {
        console.log(`No! ${(mashinePrie - totalSum).toFixed(2)}`);
    }

}
cleverLili("10", "170", "6");