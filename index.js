// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map( d => d.toLowerCase() );
};

// function nameToAttributes(array) {
//   var attributedDrivers = array.map(function(driver){
//     var splitNames = driver.split(" ");
//     return Object.assign({}, {firstName: splitNames[0], lastName: splitNames[1]});
//   });
//   return attributedDrivers;
// };

function nameToAttributes(array) {
  return array.map(d => Object.assign({}, {firstName: ( d.split(" ") )[0], lastName: ( d.split(" ") )[1]} ));
};

function attributesToPhrase(array) {
  return array.map(d => d.name + " is from " + d.hometown);
};
