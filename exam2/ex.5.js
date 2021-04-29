function hairSalon(arreyOfPrice) {
    let index = 0;
    let targetSum = Number(arreyOfPrice[index]);
    index++;
    let command = arreyOfPrice[index];
    index++;
    mens = 0;
    ladies = 0;
    kids = 0;
    tuchUp = 0;
    haircut = 0;
    color = 0;
    fullColor = 0;


    while (command !== "closed") {
        let totalSum = 0;
       

        if (totalSum >= targetSum) {
            break;
        }
        if (command === "mens") {
            mens++;
            totalSum += mens * 15
        } else if (command === "ladies") {
            ladies++;
            totalSum += ladies * 20;
        } else if (command === "kids") {
            kids++;
            totalSum += kids * 10;
        } else if (command === "touch up") {
            tuchUp++;
            totalSum += tuchUp * 20;
        } else if (command === "full color") {
            fullColor++;
            totalSum += fullColor * 30;
        } else if (command === "haircut") {
            haircut = 0
            totalSum += haircut;
        } else if (command === "color") {
            color = 0;
            totalSum += color;
        }
            command = arreyOfPrice[index];
            index++;
        //(mens * 15) + (ladies * 20) + (kids * 10) + (tuchUp * 20) + (fullColor * 30);
    }
    if (targetSum <= totalSum) {
        console.log("You have reached your target for the day!");
    } else {
        console.log(`Target not reached! You need ${targetSum - totalSum}lv. more.`);
    }
    console.log(`Earned money: ${totalSum}lv.`);
}
hairSalon([
    '50', 'color', 'full color', 'haircut', 'ladies']
);