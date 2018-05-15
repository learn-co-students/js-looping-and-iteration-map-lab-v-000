// Code your solution in this file.


function lowerCaseDrivers(drivers){
  return  drivers.map(function (driver) {
    return driver.toLowerCase();
  })
//debugger
}

function nameToAttributes(drivers){
  return drivers.map(function (driver) {
      const driverFirst = driver.split(' ')[0];  //collection.split takes a string and splits it into an array based on the argument.  Therefore the string "Hello Dolly" becomes ["Hello", "Dolly"]
      const driverLast = driver.split(' ')[1];
      //now return an object with first and last name
      return {firstName: driverFirst, lastName: driverLast};
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function (driverObject){
      return `${driverObject.name} is from ${driverObject.hometown}`
  })
}
