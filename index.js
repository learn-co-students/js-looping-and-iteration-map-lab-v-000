// Code your solution in this file.
function lowerCaseDrivers(data){
  return data.map(x => x.toLowerCase());
}
function nameToAttributes(data){
  let newArray = [];
  data.map(function(fullName){
    let name = fullName.split(" ");
    let info = Object.assign({},{firstName: name[0], lastName: name[1]});
    newArray.push(info);
    })
    return newArray;
}

function attributesToPhrase(data){
  let newArray = []
  data.map(function(person){
    console.log(person);
    console.log(person.name);
    console.log(person.hometown);
    newArray.push(person.name+' is from '+person.hometown);
  })
  console.log(newArray);
  return newArray;
}
