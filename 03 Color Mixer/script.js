const color1 = "red"
const color2 = "yellow"

const colorGenerate = (c1, c2) => {
    switch (c1, c2) {
        case ("red", "blue"):
            console.log("purple")
            break;
        case ("red", "yellow"):
            console.log("orange")
            break;
        case ("blue", "yellow"):
            console.log("green")
            break;

        default:
            console.log("Invalid color combination!");
    }
}

colorGenerate(color1, color2)