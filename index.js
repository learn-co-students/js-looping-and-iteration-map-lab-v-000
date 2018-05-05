// Code your solution in this file.
lowerCaseDrivers = (drivers) => {
  return drivers.map(d =>  d.toLowerCase())
}

nameToAttributes = (drivers) =>  {

  return drivers.map(function(d) {
    const first = d.split(' ')[0]
    const last = d.split(' ')[1]
    return {firstName: first, lastName: last}
  })
}

attributesToPhrase = (arr) =>  {
  return arr.map(function(d) {

    return `${d.name} is from ${d.hometown}`
    
  })
}
