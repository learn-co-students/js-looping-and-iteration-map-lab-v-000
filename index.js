// Code your solution in this file.
function lowerCaseDrivers(drivers, callback){
  newArray = []
  for (const element of drivers){
    newArray.push(callback(element))
  }
  return newArray
}

function lowerCase(element) {
  return element.toLowerCase()
}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
