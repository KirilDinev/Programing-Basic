function readText (arreyOfText){
    let index = 0;

 while (true){
     let text = arreyOfText[index];
     index++
    if(text === "Stop"){
        break;
 } 
 
console.log(text);
}
}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);