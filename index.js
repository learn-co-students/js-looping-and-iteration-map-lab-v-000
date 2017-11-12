// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map( driver => {
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    let obj = drivers.map ( driver => ({
        firstName: driver.split(" ")[0],
        lastName: driver.split(" ")[1]
    }))
    console.log(obj)
    return obj
}

function attributesToPhrase(drivers) {
    let phrase = drivers.map (driver => {
        return `${driver.name} is from ${driver.hometown}`
    })
    return phrase
}

