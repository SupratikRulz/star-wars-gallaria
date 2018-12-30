const deepCopy = obj => {
  let clone = {};
  for(let prop in obj) {
      if(obj[prop] != null &&  typeof(obj[prop])=="object")
          clone[prop] = deepCopy(obj[prop]);
      else
          clone[prop] = obj[prop];
  }
  return clone;
}

export default deepCopy;
