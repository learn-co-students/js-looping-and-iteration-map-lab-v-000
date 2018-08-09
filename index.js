// Code your solution in this file.


function lowerCaseDrivers(collection){

  const newCollection = collection.map(name => name.toLowerCase());
  return newCollection;
}


function nameToAttributes(collection){

  return collection.map(function (name) {
    const firstNameOfDriver = name.split(' ')[0];
    const lastNameOfDriver = name.split(' ')[1];

    return { firstName: firstNameOfDriver, lastName: lastNameOfDriver };
  });
}


function attributesToPhrase(collection){

  return collection.map(function (object) {
    return `${object.name} is from ${object.hometown}`;
  });


}
