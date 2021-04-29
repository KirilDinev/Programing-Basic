function hotelRoom(month, nights){
    let nightCount = Number(nights);

    let priceStudio = 0;
    let priceApartament = 0;

    if(month === "May" || month === "October"){
        if(nightCount > 7 && nightCount <= 14){
            priceStudio = nightCount * 50 * 0.95;
            priceApartament = nightCount * 65;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        } else if (nightCount > 14){
            priceStudio = nightCount * 50 * 0.70;
            priceApartament = nightCount * 65 * 0.90;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        }else {
            priceStudio = nightCount * 50;
            priceApartament = nightCount * 65;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        }

    } else if (month === "June" || month === "September"){
        if(nightCount > 7 && nightCount <= 14){
            priceStudio = nightCount * 75.20 ;
            priceApartament = nightCount * 68.70;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        } else if (nightCount > 14){
            priceStudio = nightCount * 75.20 * 0.80;
            priceApartament = nightCount * 68.70 * 0.90
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        }else {
            priceStudio = nightCount * 75.20;
            priceApartament = nightCount * 68.70;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        }

    } else if (month === "July" || month === "August"){
        if(nightCount > 7 && nightCount <= 14){
            priceStudio = nightCount * 76 ;
            priceApartament = nightCount * 77;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        } else if (nightCount > 14){
            priceStudio = nightCount * 76;
            priceApartament = nightCount * 77 * 0.90;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        }else {
            priceStudio = nightCount * 76;
            priceApartament = nightCount * 77;
            console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        }
    }
} 
hotelRoom()


