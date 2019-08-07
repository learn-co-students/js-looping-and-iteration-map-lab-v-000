// Code your solution in this file.
function lowerCaseDrivers (drivers) {
    return drivers.map(function(d) { 
       return d.toLowerCase() 
    })
}

function nameToAttributes (drivers) {
    return drivers.map(function(d) {
        return Object.assign({}, {['firstName']: d.split(' ')[0], ['lastName']: d.split(' ')[1]} )
    })
}

function attributesToPhrase (drivers) {
    return drivers.map(function(d) {
        return `${d['name']} is from ${d['hometown']}`
    })
}