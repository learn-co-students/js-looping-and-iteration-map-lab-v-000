// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {return driver.toLowerCase();});
}

function nameToAttributes(fullNames){
    return fullNames.map(
        function(fullName) {
            const firstAndLastName = fullName.split(' ');
            return {
                firstName: firstAndLastName[0],
                lastName: firstAndLastName[1]
            };
        }
    );
}

function attributesToPhrase(drivers){
    return drivers.map(
        function(driver){
            return `${driver.name} is from ${driver.hometown}`;
        }
    );
}