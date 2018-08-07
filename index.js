function lowerCaseDrivers (collection) {
 return collection.map(function (name){
   return name.toLowerCase();
 });
}

function nameToAttributes (collection) {
return collection.map(function(name) {
	return {firstName: name.split(" ")[0], lastName: name.split(" ")[1]}
});
}

function attributesToPhrase (collection) {
  return collection.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
