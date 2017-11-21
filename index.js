// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(name){
    return name.toLowerCase();
  })
};

function nameToAttributes(arr){
  return arr.map(function(driver){
    let fName = driver.split(" ")[0];
    let lName = driver.split(" ")[1];
    return { firstName: fName, lastName: lName };
  })
};

function attributesToPhrase(arr) {
  return arr.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  })
}
