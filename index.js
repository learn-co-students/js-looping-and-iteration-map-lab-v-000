// Code your solution in this file.

// const drivers = [
//         'Bobby Smith',
//         'Sammy Watkins',
//         'Sally Jenkins',
//         'Annette Sawyer',
//         'Sarah Hucklebee',
//         'bobby ridge'
// ];

function lowerCaseDrivers(arr) {
  return arr.map(function(driver){
    return driver.toLowerCase();
  });
}


function nameToAttributes(arr){
  return arr.map(function(driver){
    const driverName = driver.split(" ");
    return Object.assign({}, {firstName: driverName[0]}, {lastName: driverName[1]});
  });
}

// function nameToAttributes(arr){
//   return arr.map(function(driver){
//     const driverName = driver.split(" ");
//     return {firstName: driverName[0], lastName: driverName[1]};
//   });
// }