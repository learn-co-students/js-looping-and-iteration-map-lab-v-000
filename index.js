// Code your solution in this file.
function lowerCaseDrivers(drivers) {
// driver - we are basically just defining a parameter
// that represents the current item in the array we are on as we iterate

  return drivers.map(function(driver) {
    return driver.toLowerCase();
});

}

function nameToAttributes(drivers) {

   return drivers.map(function(driver) {
    const firstName = driver.split(" ")[0];
    const lastName = driver.split(" ")[1];

    //return {firstName: firstName, lastName: lastName}
    return {firstName, lastName}
 });

}

function attributesToPhrase(drivers) {

  return drivers.map(function(driver) {
    const firstName = driver.name;
    const hometown = driver.hometown;
    const something =  firstName;// "is from" driver;
     return something + " is from " + hometown;
});

}
