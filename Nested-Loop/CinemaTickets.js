function cinemaTicket(arrayOfMovies) {
    let index = 0;
    let firstMovie = arrayOfMovies[index];
    index++;
    let standard = 0;
    let kid = 0;
    let student = 0;
    let totalTicketParcent = 0
    while (firstMovie !== "Finish") {
        let freePlace = Number(arrayOfMovies[index]);
        index++;
        for (onePlace = 1; onePlace <= freePlace; onePlace++) {
            let ticketKind = arrayOfMovies[index];
            index++;
            if (ticketKind === "standard") {
                standard++;
                totalTicketParcent++;
            } else if (ticketKind === "kid") {
                kid++;
                totalTicketParcent++;
            } else if(ticketKind === "student"){
                student++;
                totalTicketParcent++;
            }
            if (ticketKind === "End"){
                onePlace--;
                console.log(`${firstMovie} - ${(onePlace / freePlace * 100).toFixed(2)}% full.`);
                break;
            }else if (onePlace === freePlace){
                console.log(`${firstMovie} - ${(onePlace / freePlace * 100).toFixed(2)}% full.`);
                break;
            }
        }
        firstMovie = arrayOfMovies[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicketParcent}`);
    console.log(`${(student / totalTicketParcent * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTicketParcent * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTicketParcent * 100).toFixed(2)}% kids tickets.`);
}
cinemaTicket(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
