// Code your solution in this file.

function lowerCaseDrivers(array) {
    const lowerCaseDriversElements = array.map(driver => driver.toLowerCase());

    return lowerCaseDriversElements;
};

function nameToAttributes(array) {
    let namedAttr = [];

    array.map(function(driver) {
        let first = driver.split(" ")[0];
        let last = driver.split(" ")[1];
        namedAttr.push(Object.assign({}, { firstName: first }, { lastName: last}));
    });

    return namedAttr;
};

function attributesToPhrase(array) {
    return array.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
};