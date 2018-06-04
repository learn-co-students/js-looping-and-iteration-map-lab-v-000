function lowerCaseDrivers(drivers){
    const newDrivers = drivers.map(function(driver){
       return driver.toLowerCase()
    })
    return newDrivers;
};

function nameToAttributes(drivers){
    const newNames = drivers.map(function(name){
        return Object.assign({}, {firstName: name.split(" ")[0], lastName: name.split(" ")[1]})
    })
    return newNames;
};

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    })
};