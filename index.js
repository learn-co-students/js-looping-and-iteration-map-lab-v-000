// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lowerCasedDrivers = drivers.map(driver => driver.toLowerCase());
  return lowerCasedDrivers;
}

function nameToAttributes(array){
  const newArr = array.map(a => Object.assign({}, {'firstName': a.split(" ")[0], 'lastName': a.split(" ")[1]}));
  return newArr;
}

function attributesToPhrase(array) {
  const newArr = array.map(a => `${a.name} is from ${a.hometown}`)
  return newArr;
}
