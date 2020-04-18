function reverseArray(arr) {
    let newArr = [];

    for(let index = arr.length -1; index >= 0; index--) {
        newArr.push(arr[index]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    // copy the array values
    let arrCopy = [];
    for(number of arr) 
        arrCopy.push(number);

    // reverse array
    let reverseArray = [];
    for(let index = 0; index < arr.length; index++) {
        let value = arrCopy.pop();
        reverseArray.push(value);
    }

    for(let index = 0; index < arr.length; index++) {
        arr[index] = reverseArray[index];
    }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log(reverseArray([1, 2, 5, 8, 7, 9]));
let arrayValue2 = ["a", "e", "i", "o", "u"];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);