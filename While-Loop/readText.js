function readText(arreayOfNames){
    index = 0;
    let name = arreayOfNames[index];
    index++;
    while(name !== "Stop"){
        console.log(name);
        name = arreayOfNames[index];
        index++;
        
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