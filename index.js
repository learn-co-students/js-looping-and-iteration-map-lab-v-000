function lowerCaseDrivers(drivers){
  const results = drivers.map(driver => driver.toLowerCase());
  return results;
}

function nameToAttributes(drivers){
  const results = drivers.map(driver => 
  Object.assign({firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]}));
  return results;
}
