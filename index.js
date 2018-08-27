// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(d){
    return d.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(d){
  let full = d.split(" ")
  return {firstName: full[0], lastName: full[1]}
})
}

function attributesToPhrase(drivers){
return drivers.map(function(d){
    return `${d.name} is from ${d['hometown']}`
  })
}
