// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {   //return drivers.map makes a new array
    return driver.toLowerCase()        //to hold changes.return the drivers to lowercase
  })
}

//can also do easier version:
//function lowerCaseDrivers(drivers) {                     //since .map makes a new array to hold the
//  return drivers.map(driver => driver.toLowerCase())      //changed values, all you have to do is
//}                                                        //return the driver.map to lower case

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {                                //return drivers.map will make new array for changed values
    names = driver.split(" ")                                           //split is used to split the string into 2 values in an array
    return Object.assign({},{firstName: names[0], lastName: names[1]})    //Object.assign will create first & last name key &
  })                                                                      //values based upon index number of names array
}                                                                    //have {} in Object.assign but really don't need bc map puts in new array

//can also do:
// function nameToAttributes(list) {
//  return list.map(function(driver) {
//    const driverFirst = driver.split(' ')[0];                //by putting names in const var we can access
//    const driverLast = driver.split(' ')[1];                 //them by the var name whenever we want

//    return { firstName: driverFirst, lastName: driverLast };
//  });
//}

function attributesToPhrase(drivers) {                        //drivers is an object w/attributes
  return drivers.map(function(driver) {                    //return drivers.map to get new array
   return `${driver.name} is from ${driver.hometown}`      //return the phrase w/driver & hometown
    //console.log(phrase)
  })
}
