function countBs(word) {
    let counter = 0;
    for(let index = 0; index < word.length; index++) {
        word.charAt(index) === 'B' ? counter += 1 : counter;
    }
    return counter;
}

function countChar(word, letter) {
    let counter = 0;
    for(let index = 0; index < word.length; index++) {
        word.charAt(index) === letter ? counter += 1 : counter;
    }
    return counter;
}

console.log(countBs('BBC'));
console.log(countBs('bbc'));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("kakkerlak", "a"));