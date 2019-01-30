function lowerCaseDrivers(drivers){
	return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
	return drivers.map((driver) => {
		let firstName = driver.split(" ")[0];
		let lastName = driver.split(" ")[1];
		return { firstName: firstName, lastName: lastName}
	})
};

function attributesToPhrase(drivers) {
	return drivers.map((driver) => {
		return (`${driver.name} is from ${driver.hometown}`);
	})
};




/* flatiron legacy code above vs my code below

const nameToAttributes = drivers.map((driver) => {
  let driverNameSplit = (driver.split(" "))
  return {firstName: driverNameSplit[0], lastName: driverNameSplit[1]}
});
*/
