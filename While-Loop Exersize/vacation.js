function vacation(arreyForVacation) {
    index = 0;
    let needMoneyForVacation = Number(arreyForVacation[index]);
    index++;
    let moneyOnHand = Number(arreyForVacation[index]);
    index++;
    let counterSpend = 0;
    let daysCounter = 0;

    while (moneyOnHand < needMoneyForVacation) {
        let spendOrSave = arreyForVacation[index];
        index++;
        let spendOrSaveSum = Number(arreyForVacation[index]);
        index++;
        if (spendOrSave === "spend") {
            counterSpend++
            moneyOnHand -= spendOrSaveSum;
            if (moneyOnHand < 0) {
                moneyOnHand = 0;
            }
        } else if (spendOrSave === "save") {
            moneyOnHand += spendOrSaveSum;
        }
        daysCounter++;
        if (counterSpend === 5) {
            console.log(`You can't save the money.`);
            console.log(counterSpend);
            break;
        }
    }
    if (moneyOnHand >= needMoneyForVacation) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);