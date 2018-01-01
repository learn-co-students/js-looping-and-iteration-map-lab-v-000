// Code your solution in this file.
function lowerCaseDrivers(array) {
  let new_array = []
  for (const element of array)
   {new_array.push(element.toLowerCase())}
   return new_array;
}

function nameToAttributes(array) {
  let new_array = []
  for (const element of array)
  {
    let nameArray = element.split(" ");
    let name_hash = {firstName: nameArray[0], lastName: nameArray[1]};
    new_array.push(name_hash);

  }
  return new_array;
}

function attributesToPhrase(array) {
  let new_array = []
  for (const element of array)
  {
    new_array.push(`${element.name} is from ${element.hometown}`)
  }
  return new_array;
}
