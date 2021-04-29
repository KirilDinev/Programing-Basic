function fruitShop2(type, day, qunatity ){
    let count = Number(qunatity);
    let price = 0;

if(day === "Monday" || day ==="Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
    if(type === "banana"){
        price = count * 2.50;
        console.log(price.toFixed(2));
    } else if (type === "apple"){
        price = count * 1.20;
        console.log(price.toFixed(2));
    }else if (type === "orange"){
        price = count * 0.85;
        console.log(price.toFixed(2));
    }else if (type === "grapefruit"){
        price = count * 1.45;
        console.log(price.toFixed(2));
    }else if (type === "kiwi"){
        price = count * 2.70;
        console.log(price.toFixed(2));
    }else if (type === "pineapple"){
        price = count * 5.50;
        console.log(price.toFixed(2));
    }else if (type === "grapes"){
        price = count * 3.85;
        console.log(price.toFixed(2));
    } else {
        console.log("error")
    }
} else if (day === "Saturday" || day ==="Sunday"){
    if(type === "banana"){
        price = count * 2.70;
        console.log(price.toFixed(2));
    } else if (type === "apple"){
        price = count * 1.25;
        console.log(price.toFixed(2));
    }else if (type === "orange"){
        price = count * 0.90;
        console.log(price.toFixed(2));
    }else if (type === "grapefruit"){
        price = count * 1.60;
        console.log(price.toFixed(2));
    }else if (type === "kiwi"){
        price = count * 3.00;
        console.log(price.toFixed(2));
    }else if (type === "pineapple"){
        price = count * 5.60;
        console.log(price.toFixed(2));
    }else if (type === "grapes"){
        price = count * 4.20;
        console.log(price.toFixed(2));
    }
} else {
    console.log("error");
}
}
fruitShop2("tomato",
"Monday",
"0.5");

