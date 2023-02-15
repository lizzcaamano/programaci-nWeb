'use strict';

let myValue = 0;
const value = () =>{
    myValue = parseFloat(prompt("Introduzca un numero"));
    return myValue;
}


const testValue = (value)=> {

    switch (value){
        case 1: console.log("Lok");
        break;
        case 2: console.log("RE lok");
        break;
        default: console.log("Bahh");
    }

    /*switch(true){
        case value>=0 && value <3 : alert("Aplazado");
        break;
        case value>3 && value <=5 : alert("Aprobado :)")
    }*/

}

let resp = value();

testValue(resp);