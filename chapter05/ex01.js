const arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((accumulator, arr) => {
    return accumulator.concat(arr);
}));