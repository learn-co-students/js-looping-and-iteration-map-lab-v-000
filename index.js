// Code your solution in this file.

function lowerCaseDrivers(arr) {
  
  const lowerCase = arr.map(x => x.toLowerCase());

  return lowerCase;
  
}

function nameToAttributes(arr) {

  const obj={};
  const result=[];
  
  const newArr = arr.map(x => x.split(' '));
  for  (const element of newArr){
    
    obj.firstName=element[0];
    obj.lastName=element[1];
    
    result.push(Object.assign({},obj));
  }
  return result;
  
}



function attributesToPhrase(obj) {
  const final=[];

  const result=obj.map(x => Object.values(x));

      for (const element in result) {
         final.push(result[element][0] +' is from ' + 
         result[element][1]);
      }
  
   
  return final;
}