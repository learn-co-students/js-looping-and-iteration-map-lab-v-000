// Code your solution in this file.


function lowerCaseDrivers(list) {
  return list.map(function (element) {
    return element.toLowerCase();
  });
}

function nameToAttributes (list) {
  return list.map(function(element) {
    const elementFirst = element.split(' ')[0];
    const elementLast = element.split(' ')[1];
    // console.log("first", elementFirst.split(' ')[0]);
    return {firstName: elementFirst, lastName: elementLast };
  });
}

function attributesToPhrase(list) {
  return list.map(function(element) {
    // console.log("name", element.name);
  return `${element.name} is from ${element.hometown}`;
});
}
