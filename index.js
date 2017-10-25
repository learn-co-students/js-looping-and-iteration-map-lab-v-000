// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(name => name.toLowerCase());
  return newDrivers
}

function nameToAttributes(drivers) {

  const newDrivers = drivers.map(function(name) {
    let space = name.indexOf(" ")
    let fname = name.slice(0, space)
    let lname = name.slice(space + 1, name.length)
    let obj = {}
    obj["firstName"] = fname
    obj["lastName"] = lname
    return obj
  })
 return newDrivers
}

function attributesToPhrase(drivers) {
  let arr = []
  const newDrivers = drivers.map(function(obj) {
    let fname = obj.name
    let town = obj.hometown
    arr.push(`${fname} is from ${town}`)
    return arr
  })
 return newDrivers[0]
}
