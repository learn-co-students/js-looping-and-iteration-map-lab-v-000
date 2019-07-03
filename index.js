
function lowerCaseDrivers(array) {
  return array.map(function(element) {return element.toLowerCase()});
  }
  
function nameToAttributes(array) {
  return array.map(function(element) {
    const firstName = element.split(" ")[0];
    const lastName = element.split(" ")[1];
    return {firstName: firstName, lastName: lastName}});
  }
  
function attributesToPhrase(array) {
  return array.map(function(element) {
    const name = element.name;
      const hometown = element.hometown;
        return element.name + " is from " + element.hometown;
    }
  );
}
  

function map(array, callback) {
  const newArr = [];
  
  for (const element of array) {
    newArr.push(callback(element));
  }
}


