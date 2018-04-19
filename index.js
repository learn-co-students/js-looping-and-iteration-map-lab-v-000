// Code your solution in this file.

function lowerCaseDrivers(array) {
	return array.map(function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes(array) {
  return array.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
	// return array.map(function (driver) {
	// 	// debugger;
	// 	driver = driver.split(" ")
	// 	x = Object.assign({}, driver, { firstName: driver[0], lastName: driver[1] });
	// 	console.log(x)
	// });
}

function attributesToPhrase(array) {
	return array.map(function (driver) {
		return driver.name + " is from " + driver.hometown;
	});
}