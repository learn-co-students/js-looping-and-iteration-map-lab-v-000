function lowerCaseDrivers(drivers) {
	return drivers.map(function(driver) {
		return driver.toLowerCase();
	})
}

function nameToAttributes(drivers) {
	return drivers.map(function(driver) {
		const firstVariable = driver.split(' ')[0];
		const secondVariable = driver.split(' ')[1];
		return {firstName: firstVariable, lastName: secondVariable };
	})
}

function attributesToPhrase(drivers) {
	return drivers.map(function(driver) {
		return `${driver.name} is from ${driver.hometown}`;
	})
}