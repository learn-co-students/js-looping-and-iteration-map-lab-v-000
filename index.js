// Code your solution in this file.


function lowerCaseDrivers(drivers) {
  drivers = drivers.map(function(driver) {
	console.log(driver)
    return driver.toLowerCase()
  })
return drivers 
}



function nameToAttributes(names) {
  const namesObj = names.map(function (name) { return {firstName: name.split(" ")[0], lastName: name.split(" ")[1] }})
  return namesObj
}


function attributesToPhrase(driver_obj) {
  const names = []
  for (var driver of driver_obj) {
    names.push(driver['name'] + " is from " + driver['hometown'])
  }
  return names
}
