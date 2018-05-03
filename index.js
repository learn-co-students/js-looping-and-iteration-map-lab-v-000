// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function (string) {return string.toLowerCase();});
}

function nameToAttributes(names){
  return names.map(function (name){
    let sep_name = name.split(" ");
    return {firstName: sep_name[0], lastName: sep_name[1]};
  });
}

function attributesToPhrase(users){
  return users.map(function(user){
    return `${user.name} is from ${user.hometown}`;
  })
}
