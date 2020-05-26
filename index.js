function lowerCaseDrivers(drivers){
  return drivers.map(function(item){return item.toLowerCase();});}

function nameToAttributes(drivers){
  return drivers.map(function(item){
    return ({firstName:item.split(' ')[0], lastName:item.split(' ')[1]});
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(item){
    return item.name +' is from ' + item.hometown
  })
}
