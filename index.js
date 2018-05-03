function lowerCaseDrivers(drivers) {
    return drivers.map(function(d)
        { return d.toLowerCase()
        });
}

function nameToAttributes(drivers) {
    
    return drivers.map(function (d) {
        const newObj = {};
        let arr = d.split(" ");
        //split d by space into a new array
        //arr[0] 
        newObj.firstName = arr[0];
        newObj.lastName = arr[1]
    });
}