// Code your solution in this file.
function lowerCaseDrivers(drivers){
    let newList = [];
    newList = drivers.map(
        function(driver){
            return driver.toLowerCase();
        });
    return newList;
}

function nameToAttributes(drivers){
    let newList = [];
    let name;
    newList = drivers.map(
        function(driver){
            name = driver.split(" ");
            return {firstName: name[0], lastName: name[1]};
        });
        return newList;
}

function attributesToPhrase(drivers){
    let newList = [];
    newList = drivers.map(
        function(driver){
            return `${driver.name} is from ${driver.hometown}`;
        });
        return newList;
}