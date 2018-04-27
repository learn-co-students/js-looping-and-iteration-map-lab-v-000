// function lowerCaseDrivers(drivers){
// 	new_drivers = []
//  for (const driver_index in drivers){
//  	new_drivers.push(drivers[driver_index].toLowerCase());
//  }
//  return new_drivers
// }

function lowerCaseDrivers(drivers){
	return drivers.map(driver => driver.toLowerCase());

}

function nameToAttributes(drivers){
	return drivers.map(driver => { return {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1] }})	
}


function attributesToPhrase(drivers){
	return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}

