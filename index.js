// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(collection) {
  return collection.map(function(element) {
    const elementFirst = element.split(' ')[0];
    const elementLast = element.split(' ')[1];

    return { firstName: elementFirst, lastName: elementLast };
  });
}

function attributesToPhrase(collection){
  return collection.map(function(element) {
    return `${element.name} is from ${element.hometown}`;
  });
}

// function attributesToPhrase(drivers) {
//   return drivers.map(function(driver) {
//     return `${driver.name} is from ${driver.hometown}`;
//   });
// }
