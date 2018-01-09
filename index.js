// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (num) {
    return num.toLowerCase();
  });
}

function nameToAttributes(drivers){
// name = ['bobby', 'smith']
 return drivers.map(name => {
   let splitName = [];
   splitName = name.split(' ');
   return { firstName: splitName[0], lastName: splitName[1] };
 });
}

function attributesToPhrase(drivers){
  return drivers.map(obj => {
    return `obj.name is from obj.hometown`;
  });
}
