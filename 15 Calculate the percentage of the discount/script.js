const CalculatePercentageOfDiscount = (OriginalPrice, DiscountPrice) => {
    const Discount = OriginalPrice - DiscountPrice;
    const PercentageOfDiscount = (Discount / OriginalPrice) * 100
    return `${PercentageOfDiscount.toFixed(2)}%`
}

const ans = CalculatePercentageOfDiscount(8000, 5000)
console.log(ans)