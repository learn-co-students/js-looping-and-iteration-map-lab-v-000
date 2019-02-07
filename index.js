// Code your solution in this file.
function lowerCaseDrivers(drivers, element) {
  return drivers.map(d => d.toLowerCase());
}

function nameToAttributes(drivers) {
  const finalDrivers = drivers.map(function(driver) {
    return Object.assign({}, { "firstName": `${driver.split(" ")[0]}`, "lastName": `${driver.split(" ")[1]}` });
  })
  return finalDrivers;
}

function attributesToPhrase(drivers, element) {
  return drivers.map(d => `${d.name}` + ' is from ' + `${d.hometown}`);
}
// function attributesToPhrase(drivers) {
//   const driversWithHometowns = drivers.map(function(driver) {
//     return Object.assign({}, driver, `${driver.name}`+ 'is from' + `${driver.hometown}` );
//   })
//   return driversWithHometowns;
// }
