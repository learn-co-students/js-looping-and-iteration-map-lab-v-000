function lowerCaseDrivers (drivers) {
    return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (drivers) {
    var splitName = drivers.split(" ");
    var firstName = splitName.slice (0, -1).join(" ");
    var lastName = splitName.pop();
    return drivers.map(function(driver) {
    return Object.assign({}, driver, { firstName: firstName, lastName: lastName });
  });
}

//
// const newEngineers = map(oldAccounts, function(account) {
//     return Object.assign({}, account, { accessLevel: 'admin' });
// });
