// Code your solution in this file.
function lowerCaseDrivers(array){
  const newArray = array.map(function(item) {return item.toLowerCase() })
  return newArray
}


function nameToAttributes(array){
  const newArray = array.map(function(item) {
    let newObject = {}
    newObject.firstName = item.split(" ")[0], newObject.lastName = item.split(" ")[1]
    return newObject
  })
  return newArray
}

function attributesToPhrase(array){
  const newArray = array.map(function(item){
  return item["name"] + " is from " + item["hometown"]

  })
return newArray
}
