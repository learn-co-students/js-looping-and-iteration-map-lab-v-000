// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (instance) {return instance.toLowerCase();});
}

function nameToAttributes(array) {
  let newArray = []
  for (const name of array) {
    newArray.push(name.split(" "));
  }
  return newArray.map(function(instance) {
    return Object.assign({}, {firstName: instance[0], lastName: instance[1]});
  });
}

function attributesToPhrase(array) {
  return array.map(function(instance) {
    return `${instance.name} is from ${instance.hometown}`;
  })
}
