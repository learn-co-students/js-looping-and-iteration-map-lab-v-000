// Code your solution in this file.

function lowerCaseDrivers(arr){
    return arr.map(name => {
        return name.toLowerCase();
    });
}

function nameToAttributes(arr){
    return arr.map(driver => {
        const [first, last] = driver.split(' ');
        return {firstName: first, lastName: last};
    })
}

function attributesToPhrase(arr){
    return arr.map(obj => `${obj.name} is from ${obj.hometown}`);
}