// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newdrivers = [];

  for (const driver of drivers) {
    newdrivers.push(driver.toLowerCase());
  }
  return newdrivers;

}

function nameToAttributes(drivers){
  const newdrivers = [];

   for (const driver of drivers){
     const splitstring = driver.split(" ");
     const newdriver = {};
     newdriver.firstName = splitstring[0];
     newdriver.lastName = splitstring[1];
     newdrivers.push(newdriver);
   }
   return newdrivers;
}

function attributesToPhrase(drivers){
  const newdrivers = [];

  for (const driver of drivers){
    const newdriver = driver['name'] + " is from " + driver['hometown'];
    newdrivers.push(newdriver);
  }
  return newdrivers;
}
