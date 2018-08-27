// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(names) {
  return names.map(
    function (name) {
      let array = name.split(" ");
      return {firstName: array[0], lastName: array[1]};
    }
  );
}

function attributesToPhrase(objects) {
  return objects.map(object => `${object.name} is from ${object.hometown}`)
}
