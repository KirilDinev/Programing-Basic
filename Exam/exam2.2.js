function catWalking(minGo, countPerDay, caloriiPerDay) {
    let min = Number(minGo);
    let count = Number(countPerDay);
    let calorii = Number(caloriiPerDay);
    dayMin = min * count;
    dayCalorii = dayMin * 5;

    if (calorii / 2 <= dayCalorii) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${dayCalorii}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${dayCalorii}.`);
    }
}
catWalking("30",
    "3",
    "600");