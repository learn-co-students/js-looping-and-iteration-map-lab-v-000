// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (each) {
    return each.toLowerCase();
  });
};
function nameToAttributes(drivers){
  return drivers.map(function (each){
    let array = each.split(" ");
    return Object.assign({}, { firstName: array[0], lastName: array[1] });
  });
};
function attributesToPhrase(drivers){
  return drivers.map(function (each){
    return `${each.name} is from ${each.hometown}`;
  });
};
