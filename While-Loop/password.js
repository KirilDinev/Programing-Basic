function password(arreayOfPass){
    index = 0;
    let username = arreayOfPass[index];
    index++;
    let password = arreayOfPass[index];
    index++;
    let currentPass = arreayOfPass[index];
    index++;
    while(currentPass !== password){
       
        currentPass = arreayOfPass[index];
        index++;
    }
    console.log(`Welcome ${username}!`)
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);