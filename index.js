function lowerCaseDrivers(array) {
  return array.map(function(element) { return element.toLowerCase() });
}

function nameToAttributes(array) {
  return array.map(function(element) {
    const firstElement = element.split(" ")[0];
    const secondElement = element.split(" ")[1];
    return { firstName: firstElement, lastName: secondElement };
  });
}
