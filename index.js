// Code your solution in this file.
function lowerCaseDrivers(array) {
	const newDrivers = array.map(function(name) {
		return name.toLowerCase()
	})

	return newDrivers
}

function nameToAttributes(array) {
	return array.map(function(fullName) {
		return {firstName: fullName.split(' ')[0], lastName: fullName.split(' ')[1]}
	})
}

function attributesToPhrase(array) {
	return array.map(function(driver) {
		return `${driver.name} is from ${driver.hometown}`
	})
}