//lowerCaseDrivers - this function takes an array of drivers, and returns an array of the drivers names in lowercase.
function lowerCaseDrivers(drivers) {
    const lowerDriver = drivers.map( function(driver){
        return driver.toLowerCase();
    } );
    return lowerDriver;
}

//nameToAttributes - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.
function nameToAttributes(drivers) {
    const objDrivers = drivers.map(function(driver){
        const names = driver.split(" ");
        return Object.assign({},{firstName: names[0]}, {lastName: names[1]});
    }); 
    return objDrivers;
}

//attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from hometown" for each JavaScript object in the array.
function attributesToPhrase(drivers) {
    const phrases = drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    });

    return phrases;
}