function lowerCaseDrivers(drivers) {
  let newDrivers = drivers.map(function(driver) {return driver.toLowerCase();});
  return newDrivers;
}

function nameToAttributes(drivers) {
  let newDrivers = drivers.map(function(driver)
    {return Object.assign({},
                          {firstName: driver.split(" ")[0]},
                          {lastName: driver.split(" ")[1]}
                        )});
  return newDrivers;
}

function attributesToPhrase(drivers) {
  let newDrivers = drivers.map(function(driver) {return driver.name + ' is from ' + driver.hometown;});
  return newDrivers;
}
