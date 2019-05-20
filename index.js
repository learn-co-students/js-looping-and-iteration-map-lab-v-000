// Code your solution in this file.
function lowerCaseDrivers(array)
{
  return array.map((driver, i, array) => {return driver.toLowerCase()})
}

function nameToAttributes(array)
{
  return array.map((driver, i, array) =>
{
  return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
})
}

function attributesToPhrase(array)
{
    return array.map((driver, i, array) =>
{
  return `${driver["name"]} is from ${driver["hometown"]}`
})
}
