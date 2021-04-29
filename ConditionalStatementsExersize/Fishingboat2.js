function fishingboat(groupBugdet, season, count) {
    let budget = Number(groupBugdet);
    let fisherCount = Number(count);

    let springPrice = 3000;
    let summerPrice = 4200;
    let autumnPrice = 4200;
    let winterPrice = 2600

    let price = 0;

    switch (season) {
        case "Summer":
            if (fisherCount <= 6) {
                if (fisherCount % 2 === 0) {
                    price = summerPrice * 0.95;
                } else {
                    price = summerPrice
                }
                price = summerPrice * 0.90;
            } else if (fisherCount >= 7 && fisherCount <= 11) {
                price = summerPrice * 0.85;
            } else if (fisherCount > 12) {
                price = summerPrice * 0.75;
            } else {
                price = summerPrice;
            }
            break;
        case "Autumn":
            if (fisherCount <= 6) {
                price = autumnPrice * 0.90;
            } else if (fisherCount >= 7 && fisherCount <= 11) {
                price = autumnPrice * 0.85;
            } else if (fisherCount > 12) {
                price = autumnPrice * 0.75;
            } else {
                price = autumnPrice;
            }
            break;
        case "Winter":
            if (fisherCount <= 6) {
                if (fisherCount % 2 === 0) {
                    price = winterPrice * 0.95;
                } else {
                    price = winterPrice;
                }
                price = winterPrice * 0.90;
            } else if (fisherCount >= 7 && fisherCount <= 11) {
                price = winterPrice * 0.85;
            } else if (fisherCount > 12) {
                price = winterPrice * 0.75;
            } else {
                price = winterPrice;
            }
            break;
        case "Spring":
            if (fisherCount <= 6) {
                if (fisherCount % 2 === 0) {
                    price = springPrice * 0.95;
                } else {
                    price = springPrice
                }
                price = springPrice * 0.90;
            } else if (fisherCount >= 7 && fisherCount <= 11) {
                price = springPrice * 0.85;
            } else if (fisherCount > 12) {
                price = springPrice * 0.75;
            } else {
                price = springPrice;
            }
            break;
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }

}
fishingboat("2000",
    "Winter",
    "13");