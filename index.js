// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function (num){return num.toLowerCase()});
}

function nameToAttributes(array){
  return array.map(function(driver){
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];
    return {firstName: driverFirstName, lastName: driverLastName};
  });
}

function attributesToPhrase(people){
  return people.map(function(person){
    return `${person.name} is from ${person.hometown}`;
  });
}
