var assert = require('assert');
var solution = require('../problem_11/solution')

describe('Problem #11', function() {
    it('Test prefix', function() {
        assert.deepEqual(solution.findMatchingString(['dog', 'deer', 'deal'], 'de'), ['deer', 'deal'])
        assert.deepEqual(solution.findMatchingString(['sword', 'sigil', 'knight', 'scythe', 'dragon'], 's'),
            ['sword', 'sigil', 'scythe'])
    })
});