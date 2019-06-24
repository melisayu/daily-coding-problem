var assert = require('assert');
var solution = require('../problem_1/solution')

describe('Problem #1', function() {
    it('Simple negative cases', function() {
        assert.equal(solution.sums([1, 2, 3, 4, 5, 6, 7], 1000), false)
        assert.equal(solution.sums([100, 200, 300, 400, 500, 600, 700], 1), false)
    })
    it('Number should not matched with itself', function() {
        assert.equal(solution.sums([100, 200, 3, 400, 500, 600, 700], 6), false)
    })
    it('Positive cases', function() {
        assert.equal(solution.sums([10, 15, 3, 7], 17), true)
        assert.equal(solution.sums([1, 2, 3, 4, 5, 6, 7], 9), true)
    })
});

