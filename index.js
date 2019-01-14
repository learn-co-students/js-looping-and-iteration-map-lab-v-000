// Code your solution in this file.
function lowerCaseDrivers(coll){
    return coll.map(function(item){
        return item.toLowerCase();
    });
};

function nameToAttributes(coll){
    return coll.map(function(item){
        let arr = item.split(" ");
        let obj = {firstName: arr[0], lastName: arr[1]};
        return obj;
    })
}

function attributesToPhrase(coll){
    return coll.map(function(item){
        return `${item.name} is from ${item.hometown}`
    })
}