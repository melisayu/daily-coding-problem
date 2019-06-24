var assert = require('assert');
var solution = require('../problem_2/solution')

describe('Problem #2', function() {
    it('Test data with division', function() {
        assert.equal(solution.products([1, 2, 3, 4, 5], [120, 60, 40, 30, 24]))
        assert.equal(solution.products([3, 2, 1], [2, 3, 6]))
    })
});

