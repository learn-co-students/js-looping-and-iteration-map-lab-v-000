// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function(name) {
    return name.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function (driver) {
    return Object.assign({}, driver, { firstName: 'Bobby', lastName: 'Hello'
  });
})
}
