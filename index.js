const lowerCaseDrivers = divers => [...divers].map(diver => diver.toLowerCase())

const nameToAttributes = input => [...input].map(fullName =>
  ({
    firstName: fullName.split(' ')[0],
    lastName: fullName.split(' ')[1]
  })
)
