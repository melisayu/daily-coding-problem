module.exports = {
    findMatchingString: function (array, queryString) {
        let len = array.length;
        let matchingString = [];
        for (let i = 0; i < len; i++) {
            if (array[i].indexOf(queryString) === 0) {
                matchingString.push(array[i])
            }
        } return matchingString
    }
}