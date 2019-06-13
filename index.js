// Code your solution in this file.
function lowerCaseDrivers(list) {
    return list.map(function (drivers) {
        return drivers.toLowerCase()
    })
}

function nameToAttributes(list) {
    return list.map(function (drivers) {
        const firstName = drivers.split(' ')[0];
        const lastName = drivers.split(' ')[1];
            return {firstName: firstName, lastName: lastName}
    })
}

function attributesToPhrase(array) {
    return array.map(function (drivers) {
        return `${drivers.name} is from ${drivers.hometown}`
    })
}