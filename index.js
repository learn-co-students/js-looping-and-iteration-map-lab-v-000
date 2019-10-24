const lowerCaseDrivers = (drivers) => {
  return drivers.map((driver) => {
    return driver.toLowerCase();
  });
}

const nameToAttributes = (drivers) => {
  return drivers.map((driver) => {
    return { firstName: driver.split(' ')[0], lastName: driver.split(' ')[1] }
  });
}

const attributesToPhrase = (drivers) => {
  return drivers.map((driver) => {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
