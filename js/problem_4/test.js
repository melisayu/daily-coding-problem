var assert = require('assert');
var solution = require('../problem_4/solution')

describe('Problem #4', function() {
    it('Test with examples from the problem', function() {
        assert.equal(solution.firstMissingPositiveInt([3, 4, -1, 1]), 2)
        assert.equal(solution.firstMissingPositiveInt([1, 2, 0]), 3)
    })

    it('Test if some values are bigger than the length of array', function() {
        assert.equal(solution.firstMissingPositiveInt([8, 7, 2, -1, 1]), 3)
    })

    it('Test if the result is bigger than all element and array assorted in ascending or descending order', function() {
        assert.equal(solution.firstMissingPositiveInt([1, 2, 3, 4, 5]), 6)
        assert.equal(solution.firstMissingPositiveInt([5, 4, 3, 2, 1]), 6)
    })
});