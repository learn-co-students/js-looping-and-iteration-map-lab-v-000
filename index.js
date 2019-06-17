// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const d = drivers.map(function(num){
    return num.toLowerCase()
  })
  return d
}
function nameToAttributes(drivers){
return drivers.map(function(num){
    return  {firstName: num.split(" ")[0], lastName: num.split(" ")[1]}

  })

}
function attributesToPhrase(drivers){
  return drivers.map(function(num){
    return `${num.name} is from ${num.hometown}`
  })
}
