/* const givenString = 'thequickbrownfox'
const givenString2 = 'bedbathandbeyond'
const dictionary = ['quick', 'brown', 'the', 'fox']
const dictionary2 = [ 'bed', 'bath', 'bedbath', 'and', 'beyond'] */

// should return ['the', 'quick', 'brown', 'fox']
// should return [either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond']]

const toOriginalSentence = (dictionaryOfWords, givenString) => {
    // split givenString to the same like in dictionary of words. if 
    // const = givenString.indexOf()
    const x = []
    for (let i = 0; i <= dictionaryOfWords.length; i++) {
        if (givenString.includes(dictionaryOfWords[i])) {
            x.push(dictionaryOfWords[i])
        }
    } return x.join('')
}

console.log(toOriginalSentence(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox'))