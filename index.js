// Code your solution in this file.
function lowerCaseDrivers(col) {
  return col.map(function (dr) {
    return dr.toLowerCase();
  })
}

function nameToAttributes(col) {
  return col.map(function (dr) {
    let drArr = dr.split(' ');
    return {firstName: drArr[0], lastName: drArr[1]}
  })
}
//{ name: 'Bobby',   hometown: 'Pittsburgh'  }
function attributesToPhrase(col) {
  return col.map(function (dr) {
    return dr['name'] + ' is from ' + dr['hometown'];
  })
}
