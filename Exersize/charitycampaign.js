function charitycampaign(days, masters, cake, waffel, pancake){


    let daysCount = Number(days);
    let masterCount = Number(masters);
    let cakesForDay = Number(cake);
    let waffelsForDay = Number(waffel);
    let pancakesForDay = Number(pancake);
    let daylySum = (cakesForDay * 45) + (waffelsForDay * 5.80) + (pancakesForDay * 3.20);
    let totalDaylySum = daylySum * masterCount;
    let totalSum = totalDaylySum * daysCount;
    let finalSum = totalSum - (totalSum / 8);
    console.log(finalSum);
}
charitycampaign( "23", "8", "14", "30", "16" );