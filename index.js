// Code your solution in this file.
function lowerCaseDrivers(array) {

  let lowerCasedArray = array.map(function(x) {
    return x.toLowerCase();
  })
  return lowerCasedArray;
}

function nameToAttributes(array) {
  let objectifiedNames = [];
  array.map(function(x) {
    let a = x.split(" ")[0]
    let b = x.split(" ")[1]
    objectifiedNames.push({firstName: a, lastName: b});
  })

  return objectifiedNames;
}

function attributesToPhrase(array) {
  let printOut = array.map(function(x){
    return `${x.name} is from ${x.hometown}`
  });
  return printOut;
}
