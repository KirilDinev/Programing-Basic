function footballSouvenirs(team, type, bayingSouvenirs) {
    let count = Number(bayingSouvenirs);
    let price = 0;

    switch (team) {
        case "Argentina":
            if(type === "flags"){
                price = count * 3.25;
        
            }
            if(type === "caps"){
                price = count * 7.20;
             
            }
            if(type === "posters"){
                price = count * 5.10;
            
            }
            if(type === "stickers"){
                price = count * 1.25;
             
            }
            break;

        case "Brazil":
            if(type === "flags"){
                price = count * 4.20;
               
            }
            if(type === "caps"){
                price = count * 8.50;
                
            }
            if(type === "posters"){
                price = count * 5.35;
             
            }
            if(type === "stickers"){
                price = count * 1.20;
              
                
            }
            break;

        case "Croatia":
            if(type === "flags"){
                price = count * 2.75;
             
            }
            if(type === "caps"){
                price = count * 6.90;
                
            }
            if(type === "posters"){
                price = count * 4.95;
              
            }
            if(type === "stickers"){
                price = count * 1.10;
               
            }
            break;

        case "Denmark":
            if(type === "flags"){
                price = count * 3.10;
              
            }
            if(type === "caps"){
                price = count * 6.50;
              
            }
            if(type === "posters"){
                price = count * 4.80;
                
            }
            if(type === "stickers"){
                price = count * 0.90;
                
            }
            break;

    }

    if(team === "Brazil" || team === "Argentina" || team === "Croatia" || team === "Denmark" || type === "flags" || type === "caps" || type === "posters" || type === "stickers"){
        console.log(`Pepi bought ${count} ${type} of ${team} for ${price.toFixed(2)} lv.`);
    }else if (team !== "Brazil" && team !== "Argentina" && team !== "Croatia" && team !== "Denmark"){
        console.log("Invalid country!");
    }else if (type !== "flags" && type !== "caps"  && type !== "posters" && type !== "stickers"){
        console.log("Invalid stock!");
    }
    
}
footballSouvenirs("Brazil", "stickers", "5");