// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(d => d.toLowerCase());
}

function nameToAttributes(drivers) {
    return drivers.map(d => {
        const firstName = d.split(' ')[0];
        const lastName = d.split(' ')[1];

        return { firstName: firstName, lastName: lastName }
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(d => `${d.name} is from ${d.hometown}`);
}