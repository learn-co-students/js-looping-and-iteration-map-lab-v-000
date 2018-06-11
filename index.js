// Code your solution in this file.

function lowerCaseDrivers(drivers){
  var drivers2 = drivers.map(function (dvr){
    return dvr.toLowerCase()
  })
  return drivers2;
}

function nameToAttributes(drivers){
  return drivers.map(function (dvr){
    const first = dvr.split(' ')[0];
    const last = dvr.split(' ')[1];
    return { firstName: first, lastName: last };
  })
  }



function attributesToPhrase(drivers){
  return drivers.map(function (dvr){
    return dvr.name + ' is from ' + dvr.hometown;
  })
}
