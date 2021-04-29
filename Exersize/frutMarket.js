function fruitMarket(strawberry, banana, orange, raspberry, strawberrykG) {

    let strawberryPrice = Number(strawberry);
    let bananInKg = Number(banana);
    let orangeInKg = Number(orange);
    let raspberryInKg = Number(raspberry);
    let strawberryInKg = Number(strawberrykG);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice - (raspberryPrice * 0.40);
    let bananaPrice = raspberryPrice - (raspberryPrice * 0.80);
    let finalRaspberryPrice = raspberryInKg * raspberryPrice;
    let finalOrangePrice = orangeInKg * orangePrice;
    let finalBananaPrice = bananInKg * bananaPrice;
    let finalStrawberryPrice = strawberryPrice * strawberrykG;
    let totalSum = finalBananaPrice + finalOrangePrice + finalRaspberryPrice + finalStrawberryPrice;
    console.log(totalSum);

}
fruitMarket("48", "10", "3.3", "6.5", "1.7")