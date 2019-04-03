'use strict';

function print (text) {
    alert(text);
}

function isValid (name) {
    if(name === null || name.search(/\s/) > -1 || name.length < 4 ){
        return false;
      }
    return true;
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

