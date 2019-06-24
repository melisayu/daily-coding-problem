var assert = require('assert');
var solution = require('../problem_12/solution')

describe('Problem #12', function() {
    it('Test climb', function() {
        assert.equal(solution.climbWays(4, [1, 2]), 5)
        assert.equal(solution.climbWays(9, [1, 3, 5]), 30)
        assert.equal(solution.climbWays(7, [1, 3, 5]), 12)
    })
});