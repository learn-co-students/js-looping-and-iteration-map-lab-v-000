// Code your solution in this file.
function lowerCaseDrivers (array) {
  const lArray = array.map(function(char) {
    return char.toLowerCase();
  });
  return lArray;
}
function nameToAttributes (array) {
  const nArray = array.map(function(name) {
    const names = name.split(' ');
    return Object.assign({}, {firstName: names[0], lastName: names[1]});
  })
  return nArray;
}
function attributesToPhrase (array) {
  const pArray = array.slice();
  return pArray.map(function(object) {
    return `${object['name']} is from ${object['hometown']}`;
  });
}
