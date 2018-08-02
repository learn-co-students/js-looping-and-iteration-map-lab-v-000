// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map(n=> n.toLowerCase())
}

function nameToAttributes(list){
  return list.map(function(driver){
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]

    return {firstname: first, lastname: last};
  });
}

function attributesToPhrase(list){
  return list.map(function (driver)
    return driver[name];
)
}
