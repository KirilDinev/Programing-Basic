function frutOrVegetables(product) {

    switch (product) {
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapas": console.log("fruit"); break;
        default: console.log("unknown")
    }
}
frutOrVegetables("tomato");

