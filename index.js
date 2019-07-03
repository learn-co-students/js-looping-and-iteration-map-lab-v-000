// Code your solution in this file.

function lowerCaseDrivers(array) {
  const newArr = [];
  for (const user of array) {
    newArr.push(user.toLowerCase());
  }
  return newArr;
}

function nameToAttributes(array) {
  const newArr = [];
  array.map(function (name) {
    userNames = name.split(" ");
    newArr.push(Object.assign({}, {firstName: userNames[0], lastName: userNames[1]}));
  });
  return newArr;
}

function attributesToPhrase(array) {
  const newArr = []
  for (const user of array) {
    newArr.push(`${user.name} is from ${user.hometown}`)
  }
  return newArr;
}
