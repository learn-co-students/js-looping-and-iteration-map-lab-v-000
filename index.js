function lowerCaseDrivers (drivers) {
  const newDrivers = drivers.map( function (driver) {
    return driver.toLowerCase();
  });
  return newDrivers;
};

function nameToAttributes (names) {
  const newArr = names.map ( function (name) {
    return Object.assign({}, { firstName: name.split(" ")[0], lastName: name.split(" ")[1]});
  });
  return newArr;
};

function attributesToPhrase (drivers) {
  const newArr = drivers.map ( function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return newArr;
};
