// Code your solution in this file.

// returns all drivers lowercased ‣
// does not modify the original array
function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(name => name.toLowerCase());
  return lcDrivers;
}

// returns list of objects with appropriate first and last names
function nameToAttributes(driversArray) {
  let driversObj = driversArray.map(function(name) {
      let dObj = {};
      nameArr = name.split(' ');
      dObj["firstName"] = nameArr[0];
      dObj["lastName"] = nameArr[1];
      return dObj;
  });
  return driversObj;
}

// converts to list saying the name and where each individual is from
function attributesToPhrase(driversObj) {

  let driversArr = driversObj.map(function(obj) {
     return `${obj["name"]} is from ${obj["hometown"]}`;

  });
  return driversArr;
}
