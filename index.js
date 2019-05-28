// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map( function(e) {return e.toLowerCase()} )
}

function nameToAttributes(drivers) {
    return drivers.map( function(e) {
        const names = e.split(" ");
        const d = {}
        d.firstName = names[0];
        d.lastName = names[1];
        console.log(d);
        return d
        
    })
}

function attributesToPhrase(drivers) {
    return drivers.map( function(e) {
        return `${e.name} is from ${e.hometown}`
    })
}
