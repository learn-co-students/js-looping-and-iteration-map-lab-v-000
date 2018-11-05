// Code your solution in this file.

function lowerCaseDrivers(string) {
  return string.map(function(driver) {
    return driver.toLowerCase();
  });
}
 function nameToAttributes(drivers) {
  return drivers.map(function(names) {
    const firstDriver = names.split(' ')[0];
    const lastDriver = names.split(' ')[1];
     return { firstName: firstDriver, lastName: lastDriver};
  });
}
 function attributesToPhrase(drivers) {
  return drivers.map(function(attr) {
    return `${attr.name} is from ${attr.hometown}`
  })
}