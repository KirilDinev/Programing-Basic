function skiTrip(stay, hotelRoomType, negOrPos) {
    let night = Number(stay) - 1;
    let price = 0;

    if(hotelRoomType === "room for one person"){
        price = night * 18.00;
    }else if(hotelRoomType === "apartment"){
        if(night < 10){
            price = night * 25 * 0.70;
        }else if(night >= 10 && night < 15){
            price = night * 25 * 0.65;
        }else{
            price = night * 25 * 0.50;
        }
    }else if(hotelRoomType === "president apartment"){
        if(night < 10){
            price = night * 25 * 0.90;
        }else if(night >= 10 && night < 15){
            price = night * 25 * 0.85;
        }else{
            price = night * 25 * 0.80;
        }
    }
    if(negOrPos === "positive"){
        price += price * 0.25;
        console.log(price.toFixed(2));
    }else if(negOrPos === "negative"){
        price += price * 0.10;
        console.log(price.toFixed(2));
    }
}
skiTrip("2",
"apartment", "positive");