// Code your solution in this file.
function lowerCaseDrivers(drivers){
const lowercase = drivers.map(driver => driver.toLowerCase());
return lowercase
};

function nameToAttributes(drivers){
  return drivers.map(function (driver) {
  const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
});
}

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}` )
}
