const lowerCaseDrivers = divers => [...divers].map(diver => diver.toLowerCase())

const nameToAttributes = input => {
  return [...input].map(fullName => {
    return {
      firstName: fullName.split(' ')[0],
      lastName: fullName.split(' ')[1]
    }
  })
}

const attributesToPhrase = people => {
  return [...people].map(person => `${person.name} is from ${person.hometown}`)
}
