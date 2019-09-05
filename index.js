function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver){
  return driver.toLowerCase() 
  });
}

function nameToAttributes(array_of_names){
  return array_of_names.map(function(name){
  const first = name.split(' ')[0]
  const last =  name.split(' ')[1]
  return {firstName: first, lastName: last}
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
  return `${driver.name} is from ${driver.hometown}`
  });
}

"<NAME OF DRIVER> is from <HOMETOWN>"