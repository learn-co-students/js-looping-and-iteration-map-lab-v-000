// Code your solution in this file.
function lowerCaseDrivers(collection){
	var array = []
	collection.map(function (value){
		array.push(value.toLowerCase());
	})
	return array;
}

function nameToAttributes(collection){
	let array = [];
	collection.map(function (x){
		array.push({ firstName: x.split(" ")[0], lastName: x.split(" ")[1]});

	});
	return array;
}

function attributesToPhrase(drivers){
	let array = [];
	drivers.map(function (x){
		array.push(x.name + " is from " + x.hometown);
	})
	return array;
}