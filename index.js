// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(driver => driver.toLowerCase());

}
function nameToAttributes(drivers) {
    let newDrivers = drivers.map(function (account) {
    return Object.assign({}, {firstName: account.split(' ')[0], lastName: account.split(' ')[1]})
});
    return newDrivers;
}

function attributesToPhrase(drivers) {
    let newDrivers =  drivers.map(function (account){
    return `${account.name} is from ${account.hometown}`
});
return newDrivers;
}



