function summerAutfit(degrees, wholeday) {

    let temperatur = Number(degrees);
    let day = wholeday;

    let outfit;
    let shoes;


    switch (day) {
        case "Morning":
            if (temperatur >= 10 && temperatur <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (temperatur > 18 && temperatur <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (temperatur >= 10 && temperatur <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperatur > 18 && temperatur <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (temperatur >= 10 && temperatur <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperatur > 18 && temperatur <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
    }
    console.log(`It's ${temperatur} degrees, get your ${outfit} and ${shoes}.`);
}
summerAutfit("28",
    "Evening");