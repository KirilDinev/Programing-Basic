function numbers(number) {
    let num = Number(number);

    if (num < 100) {
        console.log("Less than 100");
    } else if (num > 100 && num < 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Bigger than 200");
    }
}
numbers("122");
