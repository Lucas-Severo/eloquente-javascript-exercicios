function range(start, end, step) {
    let arr = [];

    if(step === undefined || step === 0)
        step = 1;
    else if(step < 0)
        step *= -1;

    if(start > end) {
        step *= -1;
        for(let count = start; count >= end; count += step) {
            arr.push(count);
        }
    } else {
        for(let count = start; count <= end; count += step) {
            arr.push(count);
        }
    }

    return arr;
}

function sum(numbers) {
    let count = 0;
    for(number of numbers) {
        count += number;
    }
    return count;
}

console.log(range(1, 10, 2));
console.log(range(5, 2));
console.log(sum(range(1, 10)));