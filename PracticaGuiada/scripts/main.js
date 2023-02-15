'use strict';

import { validateString,vAvg, checkAvg } from "./validate.js";
import{ paintCard, addStudent, modalAlert} from "./paint.js";

const btnAgregar = document.querySelector('#btnAgregar');
const btnMostrar= document.querySelector('#btnMostrar');


/* GENERAR EVENTOS
1. Colocando el método en el atributo onclick, onmouseover, onmouseout de la etiqueta
    //FUNCION PARA CAPTURAR EL EVENTO
    /*const captura = ()=>{
        alert("Hola");
    }*/
    //onclick="captura()" -> poner en el html para capturar evento


/*2. Mediante propiedad
btnAgregar.onclick = function(){
    console.log('evento mediante propiedad')
}
*/

/*

*3 Mediante el addEventListener
btnMostrar.addEventListener("click", function (){
    paintCard("ESTUDIANTE");
 });
*/


 btnAgregar.onclick = function(){
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    //console.log(`${name}, `);

    if(validateString(name) && validateString(lastName) && op !=0){
        if((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name, lastName, avg);
            modalAlert("Se agregó el Estudiante");
        }else{
            document.querySelector('#promedio').value="";
            modalAlert("Promedio Inválido");
        }
    }else{
        modalAlert("Datos inválidos, revisar los datos");
    }
 }
 
 btnMostrar.addEventListener("click", function (){
    paintCard("ESTUDIANTE");
 });
 
 /*
 *TO DO
+ que es la funcion ISNAN
+ Agregar el modal en el alert en el addstudent
+ Borrar campos una vez agregado el estudiante
+ Crear card para profesor, egresado, administrativo
+ Crear el de select
  */