// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(name => name.toLowerCase());
}

function nameToAttributes(list) {
  let newList = []

  list.map(function (fullName){
    var newObj = Object.assign({}, {firstName: fullName.split(" ")[0] }, {lastName: fullName.split(" ")[1]});
    newList.push(newObj);
  });

  return newList;
}

function attributesToPhrase(list) {
  let newList = []

  list.map(function (driverObj) {
    newList.push(`${driverObj['name']} is from ${driverObj['hometown']}`);
  });

  return newList
}
