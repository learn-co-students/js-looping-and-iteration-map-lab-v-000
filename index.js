// Code your solution in this file.

function lowerCaseDrivers(drivers){
  let newMap = drivers.map(function(driver){
    return driver.toLowerCase();
  });
  return newMap;
}

function nameToAttributes(drivers){
  let newMap = drivers.map(function(driver){
    let name = driver.split(" ");
    let obj = {
      firstName: name[0],
      lastName: name[1]
    };
    return obj;
  });
  return newMap;
}

function attributesToPhrase(drivers){
  let newMap = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
  return newMap;
}
