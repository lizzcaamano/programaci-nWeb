'use strict';

//Contenedores var-> global let ->local const->Constantes

/*
Funciones: Clásica, flecha, 
*/ 

let num1=9;
const IVA_P=19.1;


function addition(num1, num2){

    return num1 +num2;

}

// Invocación de la función

let respuesta = addition(1,2);

console.log(respuesta);
console.log(addition(5,5));


//Función tipo flecha

const avg = (num1,num2,num3) =>{
return (num1+num2+num3)/3;
}

console.log(avg(num1, IVA_P,100));




