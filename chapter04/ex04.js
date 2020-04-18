function countProperties(obj) {
    let counter = 0;
    for(prop in obj) {
        counter++;
    }
    return counter;
}

function deepEqual(values1, values2) {
    // count the amount of properties
    let counter1 = 0;
    let counter2 = 0;

    counter1 = countProperties(values1);
    counter2 = countProperties(values2);

    if(counter1 !== counter2)
        return false;

    // check if the value passed by the argument is an object or a value
    if(typeof values1 === "object" && values1 !== null) {
        for(prop in values1) {
            if(values2[prop] !== undefined) {
                if(!deepEqual(values1[prop], values2[prop]))
                    return false;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return values1 === values2;
    }
}

const obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));

console.log(deepEqual(
    {here: "no", is: { object: 3 }},
    {here: "yes", is: { object: 3 }}
));

console.log(deepEqual(
    {here: "yes", is: { object: 3 }},
    {here: "yes", is: { object: 2 }}
));

console.log(deepEqual(
    {here: "yes", is: { object: 3 }},
    {here: "yes", is: { object: 3 }, the: { object: 5 }}
));

console.log(deepEqual(
    {here: "yes", is: { object: 3 }, the: { object: 5 }},
    {here: "yes", is: { object: 3 }, the: { object: 5 }}
));