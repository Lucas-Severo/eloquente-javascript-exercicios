// npm install fs
const fs = require('fs');

function readFile(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

const ancestry = readFile('ANCESTRY_FILE.json');

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(array) {
    const group = {};

    ancestry.forEach(person => {
        const age = Math.ceil(person.died/100);

        if(!(age in group)) {
            group[age] = [];
        } 

        group[age].push(person);
    })

    return group;
}

const groups = groupBy(ancestry);

for(let group in groups) {
    console.log(group + ": " + average(groups[group].map(person => {
        return person.died - person.born;
    })));
}