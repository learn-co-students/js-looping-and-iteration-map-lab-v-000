// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newArray = [];
  drivers.map(function (driver){
    newArray.push(driver.toLowerCase());
  });
  return newArray;
}


function nameToAttributes(drivers){
  const newName = drivers.map(function(name){
   const nameSplit = name.split(" ");
    return Object.assign({}, {firstName: nameSplit[0], lastName: nameSplit[1] });
  });
  return newName;
}


function attributesToPhrase(drivers) {
  const newString = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return newString;
}
