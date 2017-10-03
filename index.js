function lowerCaseDrivers(collection){
  let newDrivers = []
  for (const driver of collection){
    newDrivers.push(driver.toLowerCase())
  }  
  return newDrivers
}

function nameToAttributes(collection){
  let names = []
  for (const element of collection){
    names.push(makePair(element))   
  }
  return names
}

function makePair(string){
  let first = string.split(' ')[0]
  let last = string.split(' ')[1]
  return { firstName:first, lastName: last }
}

function attributesToPhrase(collection){
  let phrases = []
  let phrase = ""
  for (const element of collection){
    phrase = element.name + ' is from ' + element.hometown
    phrases.push(phrase)
  }
  return phrases
}