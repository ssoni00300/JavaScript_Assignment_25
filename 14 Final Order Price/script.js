const CustomerCart = [
    {Price : 200, Quantity : 8},
    {Price : 420, Quantity : 4},
    {Price : 600, Quantity : 6},
    {Price : 800, Quantity : 8},
]

const TotalPrice = (CustomerCart) => {
    let i=1;
    for(item of CustomerCart){
        let TotalPrice = 0;
        TotalPrice = (item.Price * item.Quantity)
        console.log(`Price of item ${i} is ${item.Price} Rs and no of quantity is ${item.Quantity} and Total Price is ${TotalPrice} Rs`);
        i++;
    }
}

TotalPrice(CustomerCart)
