function lowerCaseDrivers(arr) {
	return arr.map(i => i.toLowerCase());
}

function nameToAttributes(arr) {
	const updatedArr = [];
	arr.forEach(function(element) {
	    let obj = {}
	    test = element.split(' ')
	    obj['firstName'] = test[0]
	    obj['lastName'] = test[1]
	    updatedArr.push(obj)
  	})
return updatedArr;
}

function attributesToPhrase(drivers) {
  const updatedArr = []
  drivers.forEach(function(driver) {
    updatedArr.push(`${driver.name} is from ${driver.hometown}`)
  })
  return updatedArr;
}