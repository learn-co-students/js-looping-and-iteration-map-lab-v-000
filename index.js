// Code your solution in this file.
function lowerCaseDrivers(collection){
    return collection.map(function(item){ return item.toLowerCase()})
}

function nameToAttributes(collection){
    return collection.map(function (user){
        let array = user.split(" ");
        return Object.assign({}, {firstName: array[0], lastName: array[1]})
    });
}

function attributesToPhrase(collection){
    return collection.map(function (user){
        return `${user.name} is from ${user.hometown}`
    })
}