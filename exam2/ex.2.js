function footballKit(tShurtPrice, needSumToWinTheBall){
    let tShurt = Number(tShurtPrice);
    let needSum = Number(needSumToWinTheBall);
    let shortPrice = tShurt * 0.75;
    let socksPrice = shortPrice * 0.20;
    let shoesPrice = (tShurt + shortPrice) * 2;
    let totalSum = shoesPrice + shortPrice + tShurt + socksPrice;
    let discout = totalSum * 0.15;
    let discountPrice = totalSum - discout;

    if(discountPrice >= needSum){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${discountPrice.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(needSum - discountPrice).toFixed(2)} lv. more.`);
    }
}
footballKit( "25", "100" );