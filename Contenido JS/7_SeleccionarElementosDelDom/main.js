'use strict'

//Selección por Id

const art1 = document.getElementById('art-1');
console.log(art1);

//Seleccion por Id co queryselector

const art2 = document.querySelector('#art-2');
console.log(art2);

//Selección por el atributo name
const contenedor = document.getElementsByName('div1');
console.log(contenedor);

//Selección por el atributo class
const subtitulo = document.getElementsByClassName("subtitle");
console.log (subtitulo);

//Selección querySelector class

const sutitle = document.querySelector(".sutitle");
console.log(sutitle);

//Selección querySelector todos los elementos
const todos = document.querySelectorAll("li");
console.log(todos);

const boton = document.querySelector('#enviar');

boton.addEventListener('click', (e)=>{
    const name = document.getElementById('name');
    alert(`Hola, ${name}`);
});