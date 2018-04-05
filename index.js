// Code your solution in this file.
function lowerCaseDrivers(collection) {
  const arr = []
  for (const element of collection) {
    arr.push(element.toLowerCase())
  }
  return arr
}

function nameToAttributes(collection) {
  const arr = []
  for (const element of collection) {
    const tmp = element.split(" ")
    arr.push({firstName: tmp[0], lastName: tmp[1]})
  }
  return arr
}

function attributesToPhrase(collection) {
  const arr = []
  for (const element of collection) {
    arr.push(`${element.name} is from ${element.hometown}`)
  }
  return arr
}
