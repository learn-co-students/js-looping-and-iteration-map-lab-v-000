// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){return driver.toLowerCase();});
}

function nameToAttributes(drivers){
  return drivers.map(function(element){
    const names = element.split(' ');
    return {firstName: names[0], lastName: names[1]};
  });
}

function attributesToPhrase(drivers){
  // for each object in the array, add "${Name} is from ${Hometown}"
  // iterate over array
  // for each element create string "${element.name} is from ${element.hometown}"
  return drivers.map(function(element){
    return `${element.name} is from ${element.hometown}`;
  });
}
