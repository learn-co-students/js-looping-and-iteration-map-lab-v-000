function lowerCaseDrivers(collection) {
	return collection.map(driverName => driverName.toLowerCase())
}

function nameToAttributes(collection) {
	const newArray = []
	collection.map(function (driverName) {
		const nameArray = driverName.split(" ");
		newArray.push(Object.assign({}, {firstName: nameArray[0]}, {lastName: nameArray[1]}));
	})
	return newArray
}

function attributesToPhrase(collection) {
	const newArray = []
	collection.map(function(driverName) {
		newArray.push(`${driverName.name} is from ${driverName.hometown}`)
	})
	return newArray
}