function excursion(peopleCount, nightCount, ticketBus, ticketMuseum){
    let people = Number(peopleCount);
    let night = Number(nightCount);
    let bus = Number(ticketBus);
    let museum = Number(ticketMuseum);
    let priceForOneNight = night * 20;
    let tranportTicket = bus * 1.60;
    let museumTicket = museum * 6;
    let totalSumForOne = priceForOneNight + tranportTicket + museumTicket;
    let groupSum = totalSumForOne * people;
    let totalSum = groupSum * 1.25;
    console.log(totalSum.toFixed(2));
}
excursion(
    "20",
    "14",
    "30",
    "6"
);