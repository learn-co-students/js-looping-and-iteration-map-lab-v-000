function lowerCaseDrivers(drivers) {
  const lowerD = drivers.map(driver=> driver.toLowerCase());
  return lowerD;
};

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(driver => {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];

    return {firstName: first, lastName: last}
  })
  return newDrivers;
};

function attributesToPhrase(drivers) {
  const hometown = drivers.map(driver => {
    debugger
    const name = driver["name"];
    const hometown = driver["hometown"];
    return `${name} is from ${hometown}`;
  });
  return hometown;
};
