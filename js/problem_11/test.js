var assert = require('assert');
var solution = require('../problem_11/solution')

describe('Problem #11', function() {
    it('Test prefix 1', function() {
        var q = 'de'
        var a = ['dog', 'deer', 'deal']
        var expected = ['deer', 'deal']
        assert.deepEqual(solution.findMatchingString(a, q), expected)
    })

    it('Test prefix 2', function() {
        var q = 's'
        var a = ['sword', 'sigil', 'knight', 'scythe', 'dragon']
        var expected = ['sword', 'sigil', 'scythe']
        assert.deepEqual(solution.findMatchingString(a, q), expected)
    })
});