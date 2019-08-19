const lowerCaseDrivers = (drivers) => drivers.map(driver=> driver.toLowerCase())

const nameToAttributes = (drivers) => {
  return drivers.map(driver=> {
    const [first, last] = driver.split(' ')
    return { firstName : first, lastName : last }
  });
};

const attributesToPhrase = (drivers) => drivers.map(driver=> `${driver.name} is from ${driver.hometown}`)
