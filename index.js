// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(function(driver){
    return driver.toLowerCase();
  });
}


function nameToAttributes(arr){
    // console.log("arr: ", arr);
    return arr.map(function(driver){
    const driverName = driver.split(" ");
    return Object.assign({}, {firstName: driverName[0]}, {lastName: driverName[1]});
  });
}

function attributesToPhrase(arr) {
  console.log(arr)
  return arr.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}