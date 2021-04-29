function energyBooster(fruit, size, fruitCount) {
    let count = Number(fruitCount);
    let price = 0;
    switch (fruit) {
        case "Watermelon":
            if(size === "small"){
                price = count * 56 * 2;
            } else if(size === "big"){
                price = count * 28.70 * 5;
            }
            break;
        case "Mango":
            if(size === "small"){
                price = count * 36.66 * 2;
            } else if(size === "big"){
                price = count * 19.60 * 5;
            }
            break;
        case "Pineapple":
            if(size === "small"){
                price = count * 42.10 * 2;
            } else if(size === "big"){
                price = count * 24.80 * 5;
            }
            break;
        case "Raspberry": if(size === "small"){
            price = count * 20 * 2
        } else if(size === "big"){
            price = count * 15.20 * 5
        }
        break;
    }
    if(price >= 400 && price <= 1000){
        price = price * 0.85;
    } else if(price > 1000){
        price = price * 0.50;
    }
    console.log(`${price.toFixed(2)} lv.`)
}
energyBooster(
    "Watermelon",
    "big",
    "4"
);
