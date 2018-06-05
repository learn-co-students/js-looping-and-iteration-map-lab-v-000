// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(
    function(driver){
      return  driver.toLowerCase();
    }
  );
}

function nameToAttributes(array){
  return array.map(
    function(name){
      let newArray = name.split(" ");
      return {firstName: newArray[0],lastName: newArray[1]}
    }
  );
}

function attributesToPhrase(array){
  return array.map(
    function(entry){
      return `${entry[`name`]} is from ${entry[`hometown`]}`;
    }
  );
}
