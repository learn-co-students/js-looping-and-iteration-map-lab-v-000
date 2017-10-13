// Code your solution in this file.

function lowerCaseDrivers(drivers){
  const new_drivers = drivers.map(function(name){
    return name.toLowerCase();
  });
  return new_drivers
}

function nameToAttributes(drivers){
  const new_drivers = drivers.map(function (name) {
    return Object.assign({},{ firstName:name.split(" ")[0], lastName:name.split(" ")[1]});
  });

  return new_drivers
}

function attributesToPhrase(drivers){

  const new_drivers = drivers.map(function (person ) {
    return `${person.name} is from ${person.hometown}`;
  });
  return new_drivers

}
