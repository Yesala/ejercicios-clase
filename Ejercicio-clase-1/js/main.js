//una variable es un espacio de memoria donde se almacena la información
//declaración: cuando se pone un espaco en 
let nombre;
//asignación: cuando se le asigna un valor a un espacio en memoria
nombre = 'Juan';

//tipos de datos: string, number, boolean, object, array
//string: cadena de caracteres
let apellido = 'Perez';
//boolean: true or false
let casado = false;
//number: números
let edad = 30;
//object: objetos JSON (javascript object notation) Sintaxis: Key : value
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
//array: listas de datos
let lenguajes = ['Javascript', 'PHP', 'Python', 2, true, {nombre: 'Juan', apellido: 'Perez'}];

//Javascript es un lenguaje no tipado
//Java es un lenguaje tipado

//Tipado o no tipado: es necesario o no establecer el tipo de dato que va a guardar una variable

//Ecmas = consorcio que crea estándar de uso para javascript
//EcmaScript = es estandar de uso para javascript
//TypeScript = implementación del estandar para uso de javascript = let nombre2 : string;
//Tipado dinámico de  = let apellido = 'Perez';

//Tipos de declaración de variables en JS
// const : constante. No se puede cambiar el valor de la variable
// var: variable. Se puede cambiar el valor, es una variable global
// let: variable. Se puede cambiar el valor de la variable, es variable local. Depende directament de su contexto.
// Existe dentro de una estructura de flujo determinada por un bloque de código