// Make for loop function to check each element in an array
// Inside for loop, count product by multiplying all elements, store it to a new variable (totalProduct)
// Make another forloop to count totalProduct - element at index i, store to new array

module.exports = {
    products: function(input) {
        let newArray = []
        totalProduct = 1
        for(let i = 0; i < input.length; i++) {
            totalProduct *= input[i]
        }

        for(let i = 0; i < input.length; i++) {
            let timesSubtracted = 0
            let dividend = totalProduct
            while(input[i] <= dividend) {
                dividend -= input[i]
                timesSubtracted++
            }
            newArray.push(timesSubtracted)
        }
        return newArray
    }
}