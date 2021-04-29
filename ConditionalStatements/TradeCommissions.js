function tradeCommisions(town, selesVolume,) {
    let city = town;
    let seles = Number(selesVolume);
    let price = 0;

    switch(town){
        case "Sofia":
            if(seles >= 0 && seles <= 500){
                price = seles * 0.05;
                console.log(price.toFixed(2));
            }else if(seles > 500 && seles <= 1000){
                price = seles * 0.07;
                console.log(price.toFixed(2));
            }else if(seles > 1000 && seles <= 10000){
                price = seles * 0.08;
                console.log(price.toFixed(2));
            }else if(seles > 10000){
                price = seles * 0.12;
                console.log(price.toFixed(2));
            }
            break;
            case "Varna":
                if(seles >= 0 && seles <= 500){
                    price = seles * 0.045;
                    console.log(price.toFixed(2));
                }else if(seles > 500 && seles <= 1000){
                    price = seles * 0.075;
                    console.log(price.toFixed(2));
                }else if(seles > 1000 && seles <= 10000){
                    price = seles * 0.10;
                    console.log(price.toFixed(2));
                }else if(seles > 10000){
                    price = seles * 0.13;
                    console.log(price.toFixed(2));
                }
                break;
                case "Plovdiv":
                    if(seles >= 0 && seles <= 500){
                        price = seles * 0.055;
                        console.log(price.toFixed(2));
                    }else if(seles > 500 && seles <= 1000){
                        price = seles * 0.08;
                        console.log(price.toFixed(2));
                    }else if(seles > 1000 && seles <= 10000){
                        price = seles * 0.12;
                        console.log(price.toFixed(2));
                    }else if(seles > 10000){
                        price = seles * 0.145;
                        console.log(price.toFixed(2));
                    }
                    break;
                    default:console.log("error");break;
    }
}
tradeCommisions("Plovdiv",
"499.99");
