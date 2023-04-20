const CustomerAccount = {
    name : "Shubham",
    balance : 800
}

function Deposit(amount){
    CustomerAccount.balance += amount
    console.log(`Successfully deposited $${amount}. New balance is ${CustomerAccount.balance}.`)
}

function WithDraw(amount){
    if(CustomerAccount.balance >= amount){
        CustomerAccount.balance -= amount
        console.log(`Successfully widthdrew $${amount}. New balance is ${CustomerAccount.balance}.`)
    }
    else{
        console.log(`Insufficient funds. Current balance is ${CustomerAccount.balance}.`)
    }
}

Deposit(800)
WithDraw(400)