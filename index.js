// Code your solution in this file.

function lowerCaseDrivers(drivers){
    return drivers.map(function(name){
        // # loop over each element in the driver Array.apply.apply.apply
        // # turn name to lowercase

     return name.toLowerCase()
    //  # then goes back into .map which returns it as an array
      
    })
}

function nameToAttributes(drivers){
    return drivers.map(function(driver)
    {
   let x = driver.split(' ')
        return {firstName: x[0], lastName: x[1]}
    })
} 

function attributesToPhrase(drivers) {
    return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
    })

}