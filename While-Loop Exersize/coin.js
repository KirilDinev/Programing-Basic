function coins(arrayOfCoins) {
    let coins = Number(arrayOfCoins[0]);
    coins = Math.floor(coins * 100);
    let coinscounter = 0;
    while (coins > 0) {
        if (coins >= 200) {
            coins -= 200;
            coinscounter++;
        } else if (coins >= 100) {
            coins -= 100;
            coinscounter++;
        } else if (coins >= 50) {
            coins -= 50;
            coinscounter++;
        } else if (coins >= 20) {
            coins -= 20;
            coinscounter++;
        } else if (coins >= 10) {
            coins -= 10;
            coinscounter++;
        } else if (coins >= 5) {
            coins -= 5;
            coinscounter++;
        } else if (coins >= 2) {
            coins -= 2;
            coinscounter++;
        } else if (coins >= 1) {
            coins -= 1;
            coinscounter++;
            break;
        }
    }
    console.log(coinscounter);
}
coins(["0.56"]);






