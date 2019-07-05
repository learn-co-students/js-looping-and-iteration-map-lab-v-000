// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map( (ele) => { return ele.toLowerCase() })
}
/*
a = ('Bobby', 'Sammy', 'Sally')
a[0].toLowerCase = 'bobby'
a[1].toLowerCase = 'sammy'
a[2].toLowerCase = 'sally'
*/


function nameToAttributes(list){
  return list.map( (ele) => {
    let names = ele.split(' ');
    return {'firstName':names[0], 'lastName': names[1]}
   })
}
/*
a = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins']
a[0].split(' ') = ['Bobby', 'Smith']
a[1].split(' ') = 'Sammy Watkins'
*/
function attributesToPhrase(list){
  return list.map( (ele) => {
    return `${ele['name']} is from ${ele['hometown']}`
  })
}
/*

*/
