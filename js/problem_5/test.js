var assert = require('assert');
var solution = require('../problem_5/solution')

describe('Problem #5', function() {
    it('Test car', function() {
        assert.equal(solution.car(solution.cons(3, 4)), 3)
        assert.equal(solution.car(solution.cons(7, 2)), 7)
    })

    it('Test cdr', function() {
        assert.equal(solution.cdr(solution.cons(3, 4)), 4)
        assert.equal(solution.cdr(solution.cons(7, 2)), 2)
    })
});