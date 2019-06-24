module.exports = {
    firstMissingPositiveInt: function (arr) {
        const sortedArr = arr.sort((a, b) => a > b)
        let prev = sortedArr[0]
        for (let i = 1; i <sortedArr.length; i++) {
            const diff = sortedArr[i] - prev;
            const missingInt = prev + 1
            if ((missingInt != 0) && diff > 1) {
                return missingInt
            }
            prev = sortedArr[i]
        }
        return prev + 1
    }
}