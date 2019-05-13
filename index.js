// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(function(driver){
    return driver.toLowerCase()});
}

function nameToAttributes(arr){
  return arr.map(function(driver){
    const driverFirst = driver.split(" ")[0];
    const dirverLast = driver.split(" ")[1];
    return { firstName: driverFirst, lastName: dirverLast }
  });
}

function attributesToPhrase(list){
  return list.map(function(driver){
    return  `${driver.name} is from ${driver.hometown}`;
  });
}
