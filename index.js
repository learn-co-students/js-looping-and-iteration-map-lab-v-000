// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(word => word.toLowerCase())
}

function nameToAttributes(arr) {
  const newArr = arr.map(function(word) {
    const newWord = word.split(" ");
    const first = {firstName: newWord[0]};
    const last = {lastName: newWord[1]};
    return Object.assign(first, last);
  });
  return newArr;
}
function attributesToPhrase(arr) {
  return arr.map(function(word) {
    return word.name + " is from " + word.hometown;
  });
}
