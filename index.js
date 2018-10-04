// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(
    function(element) {
      return element.toLowerCase();
    }
  );
}

function nameToAttributes(arr){
  return arr.map(
    function(element) {
      const newElem = element.split(" ");
      return Object.assign({}, { firstName: `${newElem[0]}` }, { lastName: `${newElem[1]}` });
    }
  );
}

function attributesToPhrase(drivers){
  return drivers.map(
    function(obj) {
      return `${obj.name} is from ${obj.hometown}`;
    }
  ); 
}