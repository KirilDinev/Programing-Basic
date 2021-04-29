function newHome(fwolers, fwolersAmaunt, homeBudget) {
    let fwolersType = fwolers;
    let fwolersCount = Number(fwolersAmaunt);
    let budget = Number(homeBudget);

    let Roses = 5;
    let Dahlias = 3.80;
    let Tulips = 2.80;
    let Narcissus = 3;
    let Gladiolus = 2.50;

    let fwolerPrice = 0

    switch (fwolersType) {
        case "Roses":
            if (fwolersCount > 80) {
                fwolerPrice = fwolersCount * Roses * 0.90;
            } else {
                fwolerPrice = fwolersCount * Roses;
            }
            break;
        case "Dahlias":
            if (fwolersCount > 90) {
                fwolerPrice = fwolersCount * Dahlias * 0.85;
            } else {
                fwolerPrice = fwolersCount * Dahlias;
            }
            break;
        case "Tulips":
            if (fwolersCount > 80) {
                fwolerPrice = fwolersCount * Tulips * 0.85;
            } else {
                fwolerPrice = fwolersCount * Tulips;
            }
            break;
        case "Narcissus":
            if (fwolersCount < 120) {
                fwolerPrice = fwolersCount * Narcissus * 1.15;
            } else {
                fwolerPrice = fwolersCount * Narcissus;
            }
            break;
        case "Gladiolus":
            if (fwolersCount < 80) {
                fwolerPrice = fwolersCount * Gladiolus * 1.20;
            } else {
                fwolerPrice = fwolersCount * Gladiolus;
            }
            break;

    }
    if (budget >= fwolerPrice) {
        console.log(`Hey, you have a great garden with ${fwolersCount} ${fwolersType} and ${(budget - fwolerPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(fwolerPrice - budget).toFixed(2)} leva more.`)
    }
}
newHome("Narcissus",
"119",
"360");


