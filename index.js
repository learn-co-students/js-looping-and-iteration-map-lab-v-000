// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let lowerCaseDriversArray = []
  drivers.map(function(driver){
    lowerCaseDriversArray.push(driver.toLowerCase())
  });
  return lowerCaseDriversArray
}

function nameToAttributes(drivers){
  const newDriversArray = []
  drivers.map(function(driver){
    let newDriver = {}
    newDriver['firstName'] = driver.split(" ")[0];
    newDriver['lastName'] = driver.split(" ")[1];
    newDriversArray.push(newDriver)
  })
  return newDriversArray
}

function attributesToPhrase(drivers){
  let phraseList = []
  drivers.map(function(driver){
    phraseList.push(`${driver['name']} is from ${driver['hometown']}`)
  })
  return phraseList
}
