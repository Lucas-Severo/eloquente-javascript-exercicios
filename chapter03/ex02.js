function isEven(number) {
    if (number === 0 || number === 1)
        return number % 2 === 0
    else if (number < 0)
        return isEven(number * -1);
    else
        return isEven(number - 2); 
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-10));
console.log(isEven(5));