// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(name => name.toLowerCase())
}

function nameToAttributes(arr) {
  return arr.map(
    function (name) {
      var str = name.split(" ");
      return  {firstName: str[0], lastName: str[1]}
    }
  )
}

function attributesToPhrase(arr) {
  return arr.map(
    obj => obj.name + ' is from ' + obj.hometown
  )
}
