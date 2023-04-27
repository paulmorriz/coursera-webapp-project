function letterFinder (word, match) {
    for ( var i = 0; i < word.length; i++){
        if (word [i] == match) {
            console.log('Found the', match, 'at', i+1)
        } else {
            console.log('---No match found at',i+1)
        }
    }
}

letterFinder("Gesundheit", "e")
/*Gesundheit ini value dari parameter 'word' 
dan e adalah value dari parameter 'match
i+1 supaya letter counter mulai dari 1 bukan 0

exit condition itu word.length sepanjang value di param word

*/