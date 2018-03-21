function lowerCaseDrivers(array) {
  const newArray = array.map(function(el){
    return el.toLowerCase();
  });
  return newArray
}

function nameToAttributes(array){
  const person = {};
  const newArray = array.map(function(el){
    return Object.assign({}, person, {firstName: el.split(" ")[0], lastName: el.split(" ")[1]})
  });
  return newArray;
}

function attributesToPhrase(array) {
  const newArray = array.map(function(el){
    return `${el.name} is from ${el.hometown}`
  });
  return newArray;
}
