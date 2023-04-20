const GenerateRandomNumber=()=>{
    const RandomNumber = Number.parseInt((Math.random() * 100) + 1);
    // const RandomNumber = Math.floor((Math.random() * 100) + 1);
    return RandomNumber
}

const RandomNumber = GenerateRandomNumber();
console.log(RandomNumber);