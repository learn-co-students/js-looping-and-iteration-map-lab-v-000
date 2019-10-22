// Code your solution in this file.
const drivers = ['Bobby Smith','Sammy Watkins','Sally Jenkins','Annette Sawyer','Sarah Hucklebee','bobby ridge'];

function lowerCaseDrivers(drivers) {
  return drivers.map(driver =>  driver.toLowerCase());
}

// function nameToAttributes(drivers) {
//     return drivers.map(function(driver){
//     const name = driver.split(' ')
//     return {firstName: name[0],lastName: name[1]};
//   });
// }

function nameToAttributes(drivers) {
  return drivers.map(driver => {
    let container = {};
    let name = driver.split(' ');
    container.firstName = name[0];
    container.lastName = name[1];
    return container;
  })
}


function attributesToPhrase(drivers){
  return drivers.map(driver => {
   return `${driver.name} is from ${driver.hometown}`;
  })
}
