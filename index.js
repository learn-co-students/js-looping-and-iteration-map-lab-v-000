// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let newDrivers = [];
  drivers.map(driver => {
    newDrivers.push(driver.toLowerCase())
  })
  return newDrivers;
}

function nameToAttributes(names){
  let newNames = [];
  names.map(name =>{
    let object = {};
    object.firstName = name.split(" ")[0]
    object.lastName = name.split(" ")[1]
    newNames.push(object);
  })
  return newNames;
}

function attributesToPhrase(drivers){
  let newArray = [];
  drivers.map(driver =>{
    newArray.push(driver.name + " is from " + driver.hometown);
  })
  return newArray;
}
