// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });

  return newDrivers;
}

// drivers = ["First Last", "Draymond Green"]
/* 
return value = {
    {
        firstName: "First"
        lastName: "Last"
    }
    {
        firstName: "Draymond"
        lastName: "Green"
    }
}
*/
function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(driver) {
    let driverFullName = driver.split(" ");
    let driverFirstName = driverFullName[0];
    let driverLastName = driverFullName[1];

    let newDriver = {
      firstName: driverFirstName,
      lastName: driverLastName
    };

    return Object.assign({}, newDriver);
  });

  return newDrivers;
}

/*
drivers = [
    {
        name: "Name",
        hometown: "Hometown"
    },
    {
        name: "Dwight Howard",
        hometown: "Atlanta, GA"
    }
]

return value = ["Name is from Hometown", "Dwight Howard is from Atlanta, GA"]
*/
function attributesToPhrase(drivers) {
  let hometownPhrases = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });

  return hometownPhrases;
}
