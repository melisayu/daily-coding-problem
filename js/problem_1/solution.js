module.exports = {
    sums: function (numbers, k) {
        const visitedElement = new Set()
        for (const number of numbers) {
            const a = k - number
            if (visitedElement.has(a)) {
                return true
                }
            visitedElement.add(number)
            }
        return false
    }
}