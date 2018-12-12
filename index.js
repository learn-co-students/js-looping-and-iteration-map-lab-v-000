// Code your solution in this file.
const drivers = [];

function lowerCaseDrivers(drivers) {
	
	function lowerCaseItems(item) {
		return item.toLowerCase();
	}

	const newArr = drivers.map(lowerCaseItems);
	return newArr;
}

function nameToAttributes(drivers) {
	function toObj (value) {
		const array = value.split(" ");
		const obj = {};
		obj.firstName = array[0];
		obj.lastName = array[1];

		return obj;
	}

	const newArray = drivers.map(toObj);
	return newArray;
}

function attributesToPhrase(drivers) {
	function toPhrase(value) {
		return `${value.name} is from ${value.hometown}`;
	}

	return drivers.map(toPhrase);
}
