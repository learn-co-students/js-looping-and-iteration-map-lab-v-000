// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(driver){return driver.toLowerCase();})
}

/* Not sure why this solution doesnt work with the function(driver) included instead of x
function nameToAttributes(drivers){
    return drivers.map(function(driver){
         Object.assign({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1])};
    };
}
*/

function nameToAttributes(drivers){
    return drivers.map(
      x => Object.assign({firstName: x.split(" ")[0],lastName: x.split(" ")[1]})
    )
  }

  function attributesToPhrase(drivers){
      return drivers.map(x => `${x.name} is from ${x.hometown}`)
  } 

  // we don't need Object.assign for creating a list of strings