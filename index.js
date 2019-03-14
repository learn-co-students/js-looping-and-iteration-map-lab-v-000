// Code your solution in this file.
function lowerCaseDrivers(array) {
let newarray = []
array.map(function(driver){
newarray.push(driver.toLowerCase())
})
return newarray
}


function nameToAttributes(array){
  let newarray = []
  array.map(function(driver){
    let temparray = driver.split(" ")
    newarray.push({firstName:temparray[0], lastName:temparray[1]})
  })
  return newarray
}

function attributesToPhrase(array){
  let newarray = []
  array.map(function(driver){
    newarray.push(`${driver.name} is from ${driver.hometown}`)
  })
  return newarray
}
