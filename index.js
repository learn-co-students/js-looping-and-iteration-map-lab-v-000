// Code your solution in this file.
function lowerCaseDrivers (drivers) {
	return drivers.map(function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes (drivers) {
	return drivers.map(function (name) { 
		const fullName = name;
		const fullNameArr = fullName.split(" ");
		return {firstName: fullNameArr[0], lastName: fullNameArr[1]};
	})
}

function attributesToPhrase (drivers) {
	return drivers.map(function (driver) { return `${driver.name} is from ${driver.hometown}` });
}