// Code your solution in this file.
function lowerCaseDrivers(driver){
  return driver.map(function (drivers){
    return drivers.toLowerCase();
  });
}

function nameToAttributes(list){
  return list.map(function (objects) {
    const first = objects.split(' ')[0];
    const last = objects.split(' ')[1];
    return {firstName: first, lastName: last}
  })
}

function attributesToPhrase(people){
  return people.map(function (person){
    return `${person.name} is from ${person.hometown}`;
  });
}
