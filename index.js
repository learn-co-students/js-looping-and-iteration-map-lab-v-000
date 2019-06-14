// Code your solution in this file.
function lowerCaseDrivers(collection){
  return collection.map(driver => driver.toLowerCase());
};

function nameToAttributes(collection){
  return collection.map(name => Object.assign({}, { 'firstName': name.split(' ')[0], 'lastName': name.split(' ')[1] }));
};

function attributesToPhrase(collection) {
  return collection.map(person => `${person.name} is from ${person.hometown}`);
};
