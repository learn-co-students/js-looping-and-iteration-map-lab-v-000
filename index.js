// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lowerd = drivers.map(driver => driver.toLowerCase());
  return lowerd;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(driver => {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];

    return {firstName: first, lastName: last}
  
  })
  return newDrivers;
}

function attributesToPhrase(drivers) {
  const hometown = drivers.map(driver => {
    const name = driver["name"];
    const hometown = driver["hometown"];
    return `${name} is from ${hometown}`;
  });
  return hometown;
};