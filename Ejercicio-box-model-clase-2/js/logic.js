//Como traer elementos del DOM en JS

console.log('logic');

var element = document.getElementById('title');
console.log('elemento', element);

var paragrahpList = document.getElementsByTagName('p');
console.log('getElementByTagName',paragrahpList);

var paragrahpListByClass = document.getElementsByClassName('paragrahp');
console.log('getElementByClassName',paragrahpListByClass);

//como agregar css a un elemento
element.classList.add('title');