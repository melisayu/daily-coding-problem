var assert = require('assert');
var solution = require('../problem_22/solution')

describe('Problem #22', function() {
    it('Test Original Sentence 1', function() {
        const wordsArr = ['quick', 'brown', 'the', 'fox']
        const str = 'thequickbrownfox'
        const result = ['the', 'quick', 'brown', 'fox']
        assert.deepStrictEqual(solution.toOriginalSentence(wordsArr, str), result)
    })

    it('Test Original Sentence 2', function() {
        const wordsArr = [ 'bed', 'bath', 'bedbath', 'and', 'beyond']
        const str = 'bedbathandbeyond'
        const result = ['bed', 'bath', 'and', 'beyond']
        assert.deepStrictEqual(solution.toOriginalSentence(wordsArr, str), result)
    })
});
