function lowerCaseDrivers(collection) {
	return collection.map(function(name) {
		return name.toLowerCase();
	})
}

function nameToAttributes(collection) {
	return collection.map(function(fullName) {
		let name = fullName.split(" ");
		return Object.assign({ firstName: name[0], lastName: name[1]});
	});
}

function attributesToPhrase(collection) {
	return collection.map(function(person) {
		return `${person.name} is from ${person.hometown}`
	});
}