// Code your solution in this file.

function lowerCaseDrivers(array) {
    return array.map(function (string) { return string.toLowerCase(); });
}

function nameToAttributes(array) {
    return array.map(function (name) {
        splitName = name.split(" ");
        newObj = {};
        newObj['firstName'] = splitName[0];
        newObj['lastName'] = splitName[1];
        return newObj;
    })
}

function attributesToPhrase(array) {
    return array.map(function (attribute) {
        return `${attribute.name} is from ${attribute.hometown}`;
    })
}