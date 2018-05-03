function lowerCaseDrivers(drivers) {
    return drivers.map(function(d)
        { return d.toLowerCase()
        });
}

function nameToAttributes(drivers) {
    
    return drivers.map(function (d) {
        const newObj = {};
        const driverFirstName = d.split(" ")[0];
        const driverLastName = d.split(" ")[1];
        //split d by space into a new array
        //arr[0] 
        return {firstName: driverFirstName, lastName: driverLastName }
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(d){
        return `${d.name} is from ${d.hometown}`
    });
}
