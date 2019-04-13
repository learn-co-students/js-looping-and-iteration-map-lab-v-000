const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// 'uses the Array map method'
// 'returns all drivers lowercased'
// 'does not modify the original array'

function lowerCaseDrivers(drivers) {
    const newDrivers = drivers.map(function(string) { return string.toLowerCase() })
   return newDrivers
};

// 'uses the Array map method'
// 'returns list of objects with appropriate first and last names'


function nameToAttributes(drivers) {
  return drivers.map(function(string) {
    const driverFirstName = string.split(' ')[0];
    const driverLastName = string.split(' ')[1];

    return { firstName: driverFirstName, lastName: driverLastName };
  });
};

// 'uses the Array map method'
// 'converts to list saying the name and where each individual is from'

function attributesToPhrase(drivers) {
  return drivers.map(function(string) {
    const firstName = string.name
    const homeTown = string.hometown

    return  `${string.name} is from ${string.hometown}`;
  });
};
