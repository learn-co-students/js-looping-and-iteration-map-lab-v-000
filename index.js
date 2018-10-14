function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let space = driver.indexOf(" ")
    return Object.assign({firstName: driver.slice(0, space)}, {lastName: driver.slice(space + 1)})
  })
}

drivers = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
]

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
