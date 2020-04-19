// npm install fs
const fs = require('fs');

function getData(filename) {
    return JSON.parse(fs.readFileSync(filename, "utf8"));
}

const ancestry = getData("ANCESTRY_FILE.json");

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function hasKnownMother(array) {
    return array.filter(person => {
        if(person.mother && byName[person.mother])
            return person;
    })
}

const byName = {};
ancestry.forEach(person => {
    byName[person.name] = person;
});

const array = hasKnownMother(ancestry);

const diffAverage = average(array.map(person => {
    const mother = byName[person.mother];
    return person.born - mother.born;
}));

console.log(diffAverage);