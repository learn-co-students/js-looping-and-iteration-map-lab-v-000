// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(e => e.toLowerCase());
}

function nameToAttributes(arr){
  let newArr = [];
  arr.map(function(e){
    let newObj = {};
    newObj.firstName = e.split(" ")[0];
    newObj.lastName = e.split(" ")[1];
    newArr.push(newObj);
  });
  return newArr;
}

function attributesToPhrase(arr){
  return arr.map(e => `${e.name} is from ${e.hometown}`);
}