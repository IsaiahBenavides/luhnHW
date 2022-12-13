function luhn(n){
    let digits = n.toString().split('').map(Number);

    // is it even?
    if(digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit)
    } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit)
    }
    // console.log(digits)

    // fix the double digits
    digits = digits.map(digit => digit > 9 ? digit - 9 : digit)
    // console.log(digits)

    // sum of digits
    const sum = digits.reduce((acc, digit) => acc += digit, 0)
    console.log(sum)

    return sum % 10 === 0
}

luhn(123) // false
luhn(1) // false
luhn(2121) // true
luhn(1230) // true
luhn(56789) // false