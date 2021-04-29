function toyShop(trip, puzzels, dolls, bears, minions, trucks) {

    let tripPrice = Number(trip);
    let puzzelCount = Number(puzzels);
    let dollsCount = Number(dolls);
    let bearsCount = Number(bears);
    let minionsCount = Number(minions);
    let trucksCount = Number(trucks);

    let toysPrice = (puzzelCount * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
    let toysCount = puzzelCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        toysPrice *= 0.75;
    }
    let rent = toysPrice * 0.10;
    let finalSum = toysPrice - rent

    if (finalSum >= tripPrice) {
        console.log(`Yes! ${(finalSum - tripPrice.toFixed(2))} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - finalSum.toFixed(2))} lv needed.`);
    }
}
toyShop("320", "8", "2", "5", "5", "1");



