function lowerCaseDrivers(drivers) {
	return drivers.map (function (drivers) {
		return drivers.toLowerCase();})
}
	
function nameToAttributes(drivers) {
	return drivers.map(function (driverName){
		const driverNameFirst = driverName.split(' ')[0];
		const driverNameLast = driverName.split(' ')[1];
		return {firstName: driverNameFirst, lastName:driverNameLast};
	});
}



function attributesToPhrase(drivers) {
	return drivers.map(function (driver) 
		{return `${driver.name} is from ${driver.hometown}`;}
	);
}