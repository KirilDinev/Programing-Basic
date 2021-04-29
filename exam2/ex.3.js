function excursionCalculator(peopleCount, type) {
    let count = Number(peopleCount);
    let priceForOne = 0;
    let price = 0;
    let discount = 0
    switch (type) {
        case "spring":
            if(count <= 5){
                priceForOne = count * 50.00;
                price = priceForOne;
            } else {
                priceForOne = count * 48.00;
                price = priceForOne
            }
            break;
        case "summer":
            if(count <= 5){
                priceForOne = count * 48.50;
                discount = priceForOne * 0.15;
                price = priceForOne - discount;
            } else {
                priceForOne = count * 45.00;
                discount = priceForOne * 0.15;
                price = priceForOne - discount;
            }
            break;
        case "autumn":
            if(count <= 5){
                priceForOne = count * 60.00;
                price = priceForOne;
            } else {
                priceForOne = count * 49.50;
                price = priceForOne;
            }
            break;
        case "winter":
            if(count <= 5){
                priceForOne =  count * 86.00;
                discount = priceForOne * 0.08;
                price = priceForOne + discount;
            } else {
                priceForOne = count * 85.00;
                discount = priceForOne * 0.08;
                price = priceForOne + discount;
            }
            break;
    }
console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator("20", "winter");