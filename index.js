// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  // makes all drivers lowercase
  // iterate through the drivers
  // Make each driver lowercase
  // Push the driver into a new array
  // Return the new array
  // const newDrivers = [];
  // for ( const driver of drivers ) {
  //   newDrivers.push(driver.toLowerCase());
  // }
  // return newDrivers;

  return drivers.map( function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes(drivers) {
  // Returns a new array
  // Separates firstName and lastName
  // Adds a comma after first name value
  // Is split the only method I can use to separate the names with a comma? .split(" ")
  // split returns an array when it looks like I need to return objects
  // Should I manipulate the value of the array - driver.split(" ")[0] - first name
  // How do I add my name broken up names into an object?
  // Wait, is this actually an object with each object having two values, firstName (key) and lastName(key) with the values as the name?
  // Each iteration should be their own object that we push into an array that's outside the loop
  // How do I make an new object every time?

  // [1, 2, 3].map(function (num) { return num * num; });


  // arrayToHoldNameObjects = []
  // for ( const driver of drivers) {
  //   let newObject = new Object();
  //   newObject["firstName"] = driver.split(" ")[0];
  //   newObject["lastName"] = driver.split(" ")[1];
  //   arrayToHoldNameObjects.push(newObject);
  // }
  // return arrayToHoldNameObjects;

  return drivers.map(function (driver) {
    let newObject = new Object();
    newObject["firstName"] = driver.split(" ")[0];
    newObject["lastName"] = driver.split(" ")[1];
    return newObject
  })
}

function attributesToPhrase(drivers) {
  // What does the collection show? - The collect is an object
  // Iterate through the collection
  // Create a new variable that's a string
  // add the values to a string
  // push the string variable into the array
  return drivers.map(function(driver) {
    let hometownString = '';
    hometownString = `${driver["name"]} is from ${driver["hometown"]}`;
    return hometownString;
  })
}
