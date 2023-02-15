'use strict';
const parrafo = document.getElementById("secon_p");
const mySubtitle = document.createElement("h2");

//Asignar contenido
mySubtitle. textContent = "Esto es un subtitulo creado desde JS";

//Agregar atributos al elemento
mySubtitle.id = "subtitulojs";
mySubtitle.className = "subtitulojs";
mySubtitle.style = "color:red; font-weight:bold";
mySubtitle.setAttribute("name", "subjs");

//Insertar en el DOM
//document.body.appendChild(mySubtitle);

parrafo.appendChild(mySubtitle);

const parrafo3 = document.createElement("p");

parrafo3.textContent = "<h3> Sub3 <h3/>";

parrafo3.innerHTML = "<h3> Sub3 <h3/>";
parrafo3.appendChild(parrafo3);


//Investigar reflow y repaint

// ¿Cómo mitigo el reflow?

