function lowerCaseDrivers(arr){
  const lCase = arr.map(el => el.toLowerCase())
  return lCase
}


function nameToAttributes(drivers){
  const objects = drivers.map(function(driver){
      return Object.assign({},{firstName: driver.split(' ')[0]}, {lastName: driver.split(' ')[1]})
    }
  )
  return objects
}


function attributesToPhrase(drivers){
  const phrases = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return phrases
}
