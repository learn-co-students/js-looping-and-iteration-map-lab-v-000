// Code your solution in this file.
function lowerCaseDrivers(array) {
	return array.map(function (driver) {
		return driver.toLowerCase()
	})
}

function nameToAttributes(array) {
	return array.map(function (driver) {
		names = driver.split(" ")
		return {firstName: names[0], lastName: names[1]}
	})
}

function attributesToPhrase(array) {
	return array.map(function(driver){
		return `${driver.name} is from ${driver.hometown}`
	})
}