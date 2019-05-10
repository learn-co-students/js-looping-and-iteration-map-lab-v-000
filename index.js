// Code your solution in this file.


function lowerCaseDrivers(array) {
    return array.map(function(driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(array) {
    return array.map(function(driver) {
        const first = driver.split(' ')[0]
        const last = driver.split(' ')[1]

        return {firstName: first, lastName: last}
    })
}

function attributesToPhrase(array) {
    return array.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}