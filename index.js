function lowerCaseDrivers(drivers){
  driversNew = drivers.map(function (driver) { return driver.toLowerCase()});
  console.log(driversNew)
  return driversNew;
};

function nameToAttributes(drivers){
  driversNew = drivers.map( function (driver) {
    const arr = driver.split(" ")
    return Object.assign({}, {firstName: arr[0]}, {lastName: arr[1]});
  });
  console.log(driversNew)
  return driversNew;
};

function attributesToPhrase(drivers){
  driversNew = drivers.map( function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
  console.log(driversNew)
  return driversNew;
};
