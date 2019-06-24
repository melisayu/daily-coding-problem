var assert = require('assert');
var solution = require('../problem_2/solution')

describe('Problem #2', function() {
    it('Test data without division', function() {
        assert.deepEqual(solution.products([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24])
        assert.deepEqual(solution.products([3, 2, 1]), [2, 3, 6])
    })
});

