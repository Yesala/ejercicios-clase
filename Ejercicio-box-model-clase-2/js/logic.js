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

let btn = document.getElementById('btn');
btn.addEventListener('click', changeActive);

function changeActive(){
    let paragraphListText = document.getElementsByClassName('g-text');
    for (let i= 0; i < paragraphListText.length; i++) {
        //se ejecuta lo que esta adetnro de este bloque siempre y cuando index sea menor al tamaño de la lista
        console.log('hola');
    }
}