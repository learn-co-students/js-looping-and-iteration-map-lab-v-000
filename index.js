// Code your solution in this file.

function lowerCaseDrivers(driverArr){
    let newDrivers = driverArr.map(function (driver) {return driver.toLowerCase()})
    return newDrivers
}

function nameToAttributes(driverArr){
    let driverObject = driverArr.map(function(driver) {return Object.assign({},
        { firstName: firstAndLast(driver, 0),
            lastName: firstAndLast(driver, 1)
        })
    })
    return driverObject
}

function attributesToPhrase(driverObject){
    let driverArr = driverObject.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
    return driverArr
}

function firstAndLast(firstAndLast, target) {
    const name_arr = firstAndLast.split(' ')
    return name_arr[target]
}
