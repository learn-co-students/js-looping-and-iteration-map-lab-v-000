// Code your solution in this file.

const lowerCaseDrivers = (arr) => {
  return arr.map(val => val.toLowerCase());
};

const nameToAttributes = (arr) => {
  return arr.map(driver => {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    
    return {
      firstName: driverFirst,
      lastName: driverLast
    }
  })
};

const attributesToPhrase = (obj) => {
  return obj.map(objVal => {
    return `${objVal.name} is from ${objVal.hometown}`;
  });
};