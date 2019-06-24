module.exports = {
    cons: function (a, b) {
        function pair(f) {
            return f(a, b)
        }
        return pair
    },
    
    car: function (functionPair) {
        return functionPair((a, b) => a)
    },
    
    cdr: function (functionPair) {
        return functionPair((a, b) => b)
    }
}