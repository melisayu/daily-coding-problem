module.exports = {
    sums: function (numbers, k) {
        const visited = new Set()
        for (const number of numbers) {
            const a = k - number
            if (visited.has(a)) {
                return true
            }
            visited.add(number)
        }
        return false
    }
}