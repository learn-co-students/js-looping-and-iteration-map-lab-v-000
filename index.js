// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(d => d.toLowerCase())
}

function nameToAttributes(arr){
  return arr.map(function(d){
    const dFirst = d.split(' ')[0];
    const dLast = d.split(' ')[1];
    return {firstName: dFirst,
            lastName: dLast};
  });
}

function attributesToPhrase(arr){
  return arr.map(function(driver){
    console.log(`${driver.name} is from ${driver.hometown}.`)
    return `${driver.name} is from ${driver.hometown}`
  })
}
