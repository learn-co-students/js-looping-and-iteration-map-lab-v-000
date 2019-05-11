function lowerCaseDrivers(drivers) {
  const new_drivers = drivers.map(driver => driver.toLowerCase());
  return new_drivers;
}

function nameToAttributes(drivers) {
  const new_drivers = drivers.map(driver => {
    let result = {};
    result['firstName'] = driver.split(' ')[0];
    result['lastName'] = driver.split(' ')[1];
    return result;
  })
  return new_drivers;
}

function attributesToPhrase(drivers) {
  const result = drivers.map(driver => {
    const phrase = `${driver.name} is from ${driver.hometown}`;
    return phrase;
  })
  return result;
}
