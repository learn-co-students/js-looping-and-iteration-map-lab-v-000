function lowerCaseDrivers(drivers) {
    return drivers.map(function(el) {
    return el.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function(el) {
    let names = el.split(" ")
    return Object.assign({}, {firstName: names[0]}, {lastName: names[1]})
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(el) {
        return `${el.name} is from ${el.hometown}`
    })
}

