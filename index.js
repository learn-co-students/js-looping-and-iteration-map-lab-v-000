function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const firstNameDriver = driver.split(' ')[0];
    const lastNameDrirver = driver.split(' ')[1];
    
    return {firstName: firstNameDriver, lastName: lastNameDrirver};
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  })
}