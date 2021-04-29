function trip(ourBudget, winterOrSummer) {
    let budget = Number(ourBudget);
    let season = winterOrSummer;

    price = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                price = budget * 0.30;
                console.log("Somewhere in Bulgaria");
                console.log(`Camp - ${price.toFixed(2)}`);
            } else if (budget <= 1000) {
                price = budget * 0.40;
                console.log("Somewhere in Balkans");
                console.log(`Camp - ${price.toFixed(2)}`);
            } else {
                price = budget * 0.90;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${price.toFixed(2)}`);
            }
            break;
        case "winter":
            if (budget <= 100) {
                price = budget * 0.70;
                console.log("Somewhere in Bulgaria");
                console.log(`Hotel - ${price.toFixed(2)}`);
            } else if (budget <= 1000) {
                price = budget * 0.80;
                console.log("Somewhere in Balkans");
                console.log(`Hotel - ${price.toFixed(2)}`);
            } else {
                price = budget * 0.90;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${price.toFixed(2)}`);
            }
            break;
    }

}
trip("1500", "summer");