const firstNumber = 16
const secondNumber = 8
// operator will be - add, multiply, divide, subtract, modulus
const operator = "*"

const calculator = (num1, num2) => {
    switch (operator) {
        case "+":
            console.log(num1 + num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case "/":
            console.log(num1 / num2)
            break
        case "%":
            console.log(num1 % num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        default:
            console.error("Invalid Operator! ")
            break
    }
}

calculator(firstNumber, secondNumber)