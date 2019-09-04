// Code your solution in this file.
function lowerCaseDrivers(array){
	return array.map(function(element){ 
		return element.toLowerCase(); 
	});
}

function nameToAttributes(array){
	return array.map(function(element){
		let names = element.split(' ');
		let nameObject = {firstName: names[0], lastName: names[1]}
		return nameObject
	});
}

function attributesToPhrase(array){
	return array.map(function(element){
		return `${element.name} is from ${element.hometown}`;
	});
}