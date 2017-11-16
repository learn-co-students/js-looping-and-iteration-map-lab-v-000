// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (driverName) { return driverName.toLowerCase(); });
}

function nameToAttributes(arr) {
  return arr.map(function(driverName) {
    const nameSplit = driverName.split(' ');
    return { firstName: nameSplit[0], lastName: nameSplit[1] };
  });
}

function attributesToPhrase(arr) {
  return arr.map(function(driverInfo) {
    return `${driverInfo.name} is from ${driverInfo.hometown}`;
  });
}
