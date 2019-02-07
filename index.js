// Code your solution in this file.
function lowerCaseDrivers(drivers, element) {
  return drivers.map(d => d.toLowerCase());
}

// function nameToAttributes(drivers) {
//   const separateDriverNames = drivers.map(d => d.split(" "));
//   const finalDrivers = separateDriverNames.map(function(driver) {
//     return Object.assign({}, driver, { "firstName": `${d[0]}` "lastName": `${d[1]}` });
//   }
// }
