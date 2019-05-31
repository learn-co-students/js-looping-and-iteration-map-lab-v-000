// Code your solution in this file.
function lowerCaseDrivers(array) {
    const names = array.map( function(driver){ return driver.toLowerCase() } );
    return names;
}

function nameToAttributes(array) {
    return array.map(function(driver){
        // const first = driver.split(' ')[0];
        // const last = driver.split(' ')[1];

        // return { firstName: first, lastName: last}
        return Object.assign({}, { firstName: driver.split(' ')[0], lastName: driver.split(' ')[1] })
    });
};

function attributesToPhrase(array) {
    return array.map(function(driver){ 
        return `${driver.name} is from ${driver.hometown}`
    });    
};