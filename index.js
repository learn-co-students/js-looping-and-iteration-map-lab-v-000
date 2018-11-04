function lowerCaseDrivers(drivers) {
    let lowerCaseArr = drivers.map(driver => driver.toLowerCase());
    return lowerCaseArr;
}

function nameToAttributes(drivers) {
    let newArr = [];

    drivers.map(function(driver) {
        let first = driver.split(" ")[0];
        let last = driver.split(" ")[1];
        newArr.push(Object.assign({}, { firstName: first }, { lastName: last }));
    })

    return newArr;
}

function attributesToPhrase(drivers) {
    let newArr = [];
  
    drivers.map(function(driver) {
      let str = `${driver.name} is from ${driver.hometown}`;
      newArr.push(str);
    })
    return newArr;
  }