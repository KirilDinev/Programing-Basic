function oldBook(arreyOfBooks){
    index = 0;
    let targetBook = arreyOfBooks[index];
    index++;
    checkbooks = arreyOfBooks[index];
    index++;
    check = 0;
    while(checkbooks !== "No More Books"){
        if(checkbooks === targetBook){
            console.log(`You checked ${check} books and found it.`);
            break;
        }
       checkbooks = arreyOfBooks[index];
       index++;
       check++;
    }
    if(checkbooks === "No More Books"){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${check} books.`);
    }
}
oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);