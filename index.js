// Code your solution in this file.
function lowerCaseDrivers(drivers) {
	return drivers.map(function(driver) {
		return driver.toLowerCase();
	});
}

function nameToAttributes(drivers) {
	return drivers.map(function(driver){
		const firstDriver = driver.split(' ')[0];
		const lastDriver = driver.split(' ')[1];

		return { firstName: firstDriver, lastName: lastDriver };
	});
}

function attributesToPhrase(drivers) {
	return drivers.map(function(driver) {
		return `${driver.name} is from ${driver.hometown}`
	});
}