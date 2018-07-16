function lowerCaseDrivers (drivers){
  return drivers.map(function (name) {
    return name.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function (person){
    const space = person.lastIndexOf(" ");
    const first = person.slice(0, space);
    const last = person.slice(space + 1, person.length);
    return {firstName: first, lastName: last};
  })
}

function attributesToPhrase(list){
  return list.map(function (person){
    return `${person.name} is from ${person.hometown}`
  })
}
