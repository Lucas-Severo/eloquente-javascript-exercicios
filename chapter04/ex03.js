function arrayToList(arr) {
    let list = null;
    let obj = {};

    for(let index = arr.length - 1; index >= 0; index--) {
        obj = {};
        obj.value = arr[index];
        obj.rest = list;
        list = obj;
    }

    return list;
}

function listToArray(list) {
    let arr = [];

    let rest;

    while(rest !== null) {
        arr.push(list.value);
        list = list.rest;
        rest = list;
    }

    return arr;
}

function nth(list, index) {
    if(index === 0)
        return list.value;
    if(list.rest === null)
        return undefined;

    return nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(nth(arrayToList([10, 20, 30]), 3));