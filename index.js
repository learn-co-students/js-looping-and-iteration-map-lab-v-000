// Code your solution in this file.
const lowerCaseDrivers = list => list.map(driver => driver.toLowerCase());

const nameToAttributes = list =>
  list.map((driver) => {
    const [firstName, lastName] = driver.split(' ');
    return { firstName, lastName };
  });

const attributesToPhrase = drivers =>
  drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
