function pool(count, price, shezlongPrice, unbrellaPrice){
    let peopleCount = Number(count);
    let enterPrice = Number(price);
    let shezlong = Number(shezlongPrice);
    let unbrella = Number(unbrellaPrice);
    let peopleEnterPrice = peopleCount * enterPrice;
    let needShezlong = Math.ceil (peopleCount * 0.75);
    let needShezlongPrice = needShezlong * shezlong;
    let needUnbrella = Math.ceil (peopleCount / 2);
    let needUnbrellaPrice = needUnbrella * unbrella;
    let totalSum = needShezlongPrice + needUnbrellaPrice + peopleEnterPrice;
    console.log(`${(totalSum).toFixed(2)} lv.`);
}
pool(
"21",
"5.50",
"4.40",
"6.20"
);