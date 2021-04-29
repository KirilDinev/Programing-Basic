function birthdayParty(rentForRoom){

    let rent = Number(rentForRoom);
    let cake = rent * 0.20;
    let drinks = cake - (cake * 0.45);
    let animator = rent / 3;
    console.log(rent + cake + drinks + animator);

}
birthdayParty( "2250")