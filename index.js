function lowerCaseDrivers(drivers) {
  return drivers.map(
    function(driver) {
      return driver.toLowerCase();
    }
  )
}

function nameToAttributes(drivers) {
  return drivers.map(
    function(driver) {
      const first = driver.split(" ")[0];
      const last = driver.split(" ")[1];

      return { firstName: first, lastName: last};
      //isn't changing value of original name, just returning these strings
    }
  )
}

function attributesToPhrase(drivers) {
  return drivers.map(
    function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    }
  )
}
