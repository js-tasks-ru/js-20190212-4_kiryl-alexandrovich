'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const numbersArr = str.match(/-?[0-9]+[.]?[0-9]*/g);
  return {min: Math.min.apply(null, numbersArr), max: Math.max.apply(null, numbersArr)}
}

