const toOriginalSentence = (dictionaryOfWords, givenString) => {
    let wordsObj = []
    // Loop through the dictionary and find the index of the word in the given string
    for (let i = 0; i < dictionaryOfWords.length; i++) {
        wordsObj.push({
            "word": dictionaryOfWords[i],
            "index": givenString.indexOf(dictionaryOfWords[i])
        })
    }
    // Sort the words from the smallest index to the biggest
    const sorted = wordsObj.sort((a, b) => a.index - b.index)
    // Remove duplicate words by removing words with the same index
    const filtered = sorted.reduce((a, b) => {
        const x = a.find(item => item.index === b.index)
        if (!x) {
            return a.concat([b])
        } else {
            return a
        }
    }, [])
    return filtered.map((val) =>  val.word)
}

module.exports = {
    toOriginalSentence
}
