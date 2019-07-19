// Code your solution in this file.

function lowerCaseDrivers(driversArray) {
    const lowercaseDrivers = driversArray.map( x => x.toLowerCase())

    return lowercaseDrivers; 
}

function nameToAttributes(driversArray) {
    const namedDrivers = driversArray.map( x => Object.assign({}, {"firstName": x.split(" ")[0]}, {"lastName": x.split(" ")[1]}));

    return namedDrivers; 
}

function attributesToPhrase(driversArray) {
    const driverStrings = driversArray.map (x => x.name + " is from " + x.hometown);  

    return driverStrings; 
}