function lowerCaseDrivers(drivers) {
  return (drivers.map(driver => driver.toLowerCase()));
}

function nameToAttributes(drivers){
  return drivers.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];

    return { firstName: firstName, lastName: lastName };
  })
}

function attributesToPhrase(drivers){
  return(drivers.map(driver => `${driver.name} is from ${driver.hometown}`));
}
