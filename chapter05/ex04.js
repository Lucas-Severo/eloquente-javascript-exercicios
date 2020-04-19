function every(array, functor) {
    for(element of array) {
        if(!functor(element)) {
            return false;
        }
    }
    return true;
}

function some(array, functor) {
    for(element of array) {
        if(functor(element)) {
            return true;
        }
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));