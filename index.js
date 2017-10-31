function lowerCaseDrivers(array){
    return array.map((name) => {
       return  name.toLowerCase()
    })
}

function nameToAttributes(array){
   return array.map((fullname)=>{
        const first = fullname.split(" ")[0]
        const last = fullname.split(" ")[1]
        return {firstName: first, lastName: last}
        

    })
}

function attributesToPhrase(drivers){
   return drivers.map((driver)=> {
       return driver.name + " is from " + driver.hometown
    })
}