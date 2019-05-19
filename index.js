// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(d => d.toLowerCase())
}

function nameToAttributes(drivers) {
    var reformattedArray = drivers.map(function(driver) {
       let rObj = {"firstName": [], "lastName": []};
       let name = driver.split(" ")
        rObj["firstName"] = name[0]
        rObj["lastName"] = name[1]
        return rObj
        
        });
        return reformattedArray
}

function attributesToPhrase(drivers) {
    return drivers.map( d => `${d.name} is from ${d.hometown}` )
}

