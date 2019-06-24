const decode = function (message) {
    let messageArray = message.toString().split('')
    let len = message.length
    let sum = 0
    if (len === 0) {
        return 0
    } else if (len === 1) {
        return 1
    }
    sum += messageArray.slice(1, len)
    if (parseInt(message.slice(0, 2).join('')) <= 26) {
        if (len === 2) {
            sum += 1
        }
        sum += message.slice(2, len)
    }
    return sum
}

console.log(decode(111));
console.log(decode(213));
console.log(decode(2331));
console.log(decode(2321));
console.log(decode(2221));