// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lowerCasedDrivers = drivers.map(function (driver) { return driver.toLowerCase(); });

  return lowerCasedDrivers;
}

function nameToAttributes(names) {

  const result = names.map(function (name) { return { firstName: name.split(" ")[0], lastName: name.split(" ")[1] }});

  return result;
}

function attributesToPhrase(attributesSet) {
  const result = attributesSet.map( function(attributes) { return `${attributes.name} is from ${attributes.hometown}` })

  return result;
}
