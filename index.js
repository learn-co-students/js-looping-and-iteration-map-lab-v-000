// Code your solution in this file.
function lowerCaseDrivers(arr) {
    return arr.map(function(element) {
        return element.toLowerCase();
    });
}

function nameToAttributes(arr) {
    return arr.map(function(element) {
        let splitFirstName = element.split(" ")[0];
        let splitLastName = element.split(" ")[1];
        return Object.assign({}, { firstName: `${splitFirstName}`, lastName: `${splitLastName}` });
    });
}

function attributesToPhrase(arr) {
    return arr.map(function(element) {
        return `${element.name} is from ${element.hometown}`
    });
}