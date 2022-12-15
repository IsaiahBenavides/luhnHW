function validCard(n){
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
    console.log(sum % 10)

    return sum % 10 === 0
}

validCard(123) // false
validCard(1) // false
validCard(2121) // true
validCard(1230) // true
validCard(56789) // false
validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true
