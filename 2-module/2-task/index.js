/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

function find(obj, value) {
  let paths = [];
  let index = 0;
  function findRed(subObj, subPath) {

    for (let key in subObj) {

      if (paths[index] === undefined) {
        paths[index] = key;
      } else {
        paths[index] = paths[index] + '.' + key;
      }

      if (subObj[key] === value) {
        index++;
      } else if (typeof subObj[key] != "object") {
        delete paths[index];
      }

      if (typeof subObj[key] === "object") {

        findRed(subObj[key]);
      }
    }
  }
  findRed(obj);

  if (paths[index - 1] === undefined) {
    return null;
  } else if (paths.length === 1) {
    return paths[0];
  } else {
    return paths;
  }
}


