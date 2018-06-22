// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(
    function (driver) {
      return driver.toLowerCase();
    }
  );
}

function nameToAttributes(drivers) {
  return drivers.map(
    function (driver) {
      nameSplit = driver.split(' ');
      return {firstName: nameSplit[0],   lastName: nameSplit[1]  };
    }
  );
}

function attributesToPhrase(drivers) {
  return drivers.map(
    function (object) {
      return object.name + " is from " + object.hometown;
    }
  );

}
