// Code your solution in this file.
function lowerCaseDrivers(drives) {
    const low = drives.map(function(name) {
        
         return name.toLowerCase();
        // debugger;
    }) 
    return low;
}

function nameToAttributes(drives) {
    return drives.map(function(fullname) {
        // const name = {};
        const first = fullname.split(" ")[0];
        const last = fullname.split(" ")[1];
        
        return {firstName: first, lastName: last};
    })
    
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    })
    
}
    
