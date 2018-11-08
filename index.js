function lowerCaseDrivers(array) {
  const newArray = array.map(function(driver) { return driver.toLowerCase(); } );
  return newArray;
}

function nameToAttributes(array) {
  const newArray = array.map(function(driver) {
    const name = driver.split(" ");
    return Object.assign({}, { firstName: name[0]}, { lastName: name[1]});
  });
  return newArray;
}

function attributesToPhrase(array) {
  const newArray = array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return newArray;
}
