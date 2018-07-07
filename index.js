// Code your solution in this file.


function lowerCaseDrivers(drivers){
  return drivers.map(x => x.toLowerCase())
}

function nameToAttributes(drivers){
  return drivers.map(
    x =>
      Object.assign(
        {
        firstName: x.split(" ")[0],
        lastName: x.split(" ")[1]
        })
  )
}

function attributesToPhrase (drivers) {
  return drivers.map(x => `${x.name} is from ${x.hometown}`)
}
