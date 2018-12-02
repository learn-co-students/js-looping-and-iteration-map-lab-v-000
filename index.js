// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  const newObj = [];
  drivers.map(driver => {
    newObj.push({firstName: driver.split(" ")[0],lastName: driver.split(" ")[1]})
  });
  return newObj;
}

function attributesToPhrase(drivers) {
  const newArr = [];
  drivers.map(driver => {
    newArr.push(`${driver.name} is from ${driver.hometown}`)
  });
  return newArr;
}
