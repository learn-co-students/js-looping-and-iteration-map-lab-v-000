// Code your solution in this file.
 function lowerCaseDrivers(drivers) {
    let shortCaseNameDriver = drivers.map(function(driver) {
        return driver.toLowerCase();
    });
    return shortCaseNameDriver;
 }

 function nameToAttributes(drivers) {
     let driversObject = Object.assign({}, ...drivers.map(driver => ({ [firstName]: driverFirst, [lastName]: driverLast}))
        
        )
        console.log(driversObject);
     const firstAndLastName = `${driver.firstName} + " " + ${driver.lastName}`;
    return driversObject;

    return firstAndLastName;

    // const driversToObject = (drivers, firstName, lastName) =>
    //   Object.assign({}, ...arr.map(driver => (
    //       {[driver[firstName]]: driverFirst, 
    //        [driver[lastName]]: driverLast
    //   })))
    //  let firstAndLastName = `${driver.firstName} + " " + ${driver.lastName}`;
    //   return driversToObject;
    //   return firstAndLastName;
 }

