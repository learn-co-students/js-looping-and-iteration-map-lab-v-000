// Code your solution in this file.
function lowerCaseDrivers(drivers) {
	return drivers.map(function(element) {
		return element.toLowerCase();
	})
}

function nameToAttributes(drivers) {
	return drivers.map(function(element, index ,array) {
		for (let element in array) {
			let newArray = array[index].split(" ")
			return Object.assign({}, {firstName: newArray[0], lastName: newArray[1]})
		}
	})
}

function attributesToPhrase(drivers) {
	return drivers.map(function(element) {
		return`${element.name} is from ${element.hometown}`
	})
}


