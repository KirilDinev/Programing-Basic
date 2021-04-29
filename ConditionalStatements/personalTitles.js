function personalTitles(yearsOld, MennOrWomman ){

    let age = Number(yearsOld);
    let sex = MennOrWomman;

    if(sex === "f"){
        if(age < 16){
            console.log("Miss");
        }else{
            console.log("Ms.");
        }
    }else if(sex === "m"){
        if(age < 16){
            console.log("Master");
        }else{
            console.log("Mr.");
        }
    }
}
personalTitles("2", "m");