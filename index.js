// Code your solution in this file.


function lowerCaseDrivers(drivers) {
	const newArray = drivers.map(function (driver) {
		return driver.toLowerCase();
	});
	return newArray;
} 

function nameToAttributes(drivers) {
	const namesArray = drivers.map(function(driver) {
		return driver.split(" ");
	});
	const nameObjectsArray = namesArray.map(function(name) {	
		const obj = {};
		obj.firstName = name[0];
		obj.lastName = name[1];
		return obj;
	});
	return nameObjectsArray;
}

function attributesToPhrase(drivers) {
	const phraseArray = drivers.map(function(driver) {
		return `${driver.name} is from ${driver.hometown}`;
	});
	return phraseArray;
}


