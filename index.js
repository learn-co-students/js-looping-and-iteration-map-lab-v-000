// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lowerCased = drivers.map(function(name){
    return name.toLowerCase();
  });
  return lowerCased;
}

function nameToAttributes(names){
  const objects = names.map(function(name){
    let newNames = name.split(" ");
    return Object.assign({}, {["firstName"]: newNames[0], ["lastName"]: newNames[1]});
  });
  return objects;
}

function attributesToPhrase(array){
  const sentence = array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
  return sentence;
}
