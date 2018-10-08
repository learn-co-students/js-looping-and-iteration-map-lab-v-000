// Code your solution in this file.
function lowerCaseDrivers (collection) {
    return collection.map(function(elem){
        return elem.toLowerCase();
    })
}

function nameToAttributes (list) {
    return list.map(function (driver) {
      const driverFirst = driver.split(' ')[0];
      const driverLast = driver.split(' ')[1];
  
      return { firstName: driverFirst, lastName: driverLast };
    });
}

function attributesToPhrase (drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
}


// for (const elem of collection) {
//     elem

//     iterate over array
    
//     const mappedCollection = collection.map(function(elem) { return elem.split(" ");});


//     split each element
//     Iterate over each new array made
//     make a new object
//     assign the first element in each new array to firstName and the second element to lastName


//     assign a new object and map over array to split each elemen
// }
// return driver.split(" ")

// drivers.map()

// { firstName: driver.slice(0, 1), lastName: driver.slice(1, -1) }

// ME MAP HAS TO HAVE A CALLBACK AS A PARAMETER!!!! WHETHER IT'S MAPPING AN ARRAY OR AN OBJECT, IT DOESN'T MATTER


// function splitList (list) { 
//     console.log(list.split(", "));
// }

// let list = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge']

// list[0].split(" ");
// function lowerCaseDrivers (collection, cb) {
//     newArray = [];
//     for (const newInst of collection) {
//         newArray.push(cb(newInst));
//     }
//     return newArray;
// }

// const newDrivers = map(drivers, function(driver) {
//     driver.toLowerCase()    
// })

// newDrivers;
// const newDrivers = map(drivers, function innerAssign (driver) {drivers, driver, { name = name.toLowerCase()
//     };
// });

// ME this doesn't work because it's for objects with attributes rather than just an array of elements, which is the lab purpose
