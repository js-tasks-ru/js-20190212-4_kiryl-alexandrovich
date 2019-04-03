/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj) {
    let result = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        
      if ("object" === typeof obj[prop] && obj[prop] != null){
        result[prop] = clone(obj[prop]); 
      }else{
        result[prop] = obj[prop];
      }
    }
  }
 return result;
}