function lowerCaseDrivers(drivers){
  return drivers.map(function(driver) {return driver.toLowerCase();})
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let driverName = driver.toString().split(" ")
    let firstName = driverName[0]
    let lastName = driverName[1]
    return {firstName, lastName}

  })

}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });


}
