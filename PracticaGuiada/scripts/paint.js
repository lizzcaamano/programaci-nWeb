'use strict';
import {checkAvg} from './validate.js';
const cardE =document.getElementById('cardsEstudiantes');
const students = [];
const profes = [];

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateEstudent =document.querySelector("#templateEstudiante").content;
    
    if (typ === 'ESTUDIANTE'){
        for(let i of students){
            const cloneTemp = templateEstudent.cloneNode(true);
            console.log(cloneTemp);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()}  ${i.ape.toUpperCase()} `;
            cloneTemp.querySelector('.text-promedio').innerHTML=`PROMEDIO: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    }else{
        
    };
    cardE.appendChild(fragment);
};

const addStudent=(name, lastName, avg)=>{
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastName,
        prom: avg
    }
    students.push(student);
    
};

const modalAlert=(cad)=>{ 
    console.log(cad);
    const alerta= document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='./img/boton-x.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }
}


//Creado campos según el rol 

const paraEstudiante = () =>{

}


export{paintCard,addStudent,modalAlert};
