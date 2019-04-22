// Code your solution in this file.
function lowerCaseDrivers(drivers){

  const newDriversArray = drivers.map(function(drv){
    return drv.toLowerCase();
  });
  return newDriversArray;
}

function nameToAttributes(drivers){
  return drivers.map(function(element){    
    let nameArray = element.split(" ");
    return Object.assign({}, 
    {firstName: nameArray[0]},
    {lastName: nameArray[1]}
    ); 
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(element){
    return `${element.name} is from ${element.hometown}`;
  });
}

