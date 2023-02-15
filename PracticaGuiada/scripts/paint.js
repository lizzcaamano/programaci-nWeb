'use strict';
import {checkAvg} from './validate.js';
const cardE =document.getElementById('cardsEstudiantes');
const cardPro = document.getElementById('cardseProfesores');
const students = [];
const profes = [];

//Mostrando campos según el rol 

const camposxRol = (tip) =>{

    switch (tip){
        case "estudiante": 
        document.getElementById("labelProm").style.display="inline-block";
        document.getElementById("promedio").style.display="inline-block";
        document.getElementById("labelEsp").style.display="none";
        document.getElementById("especialidad").style.display="none";
        break;
        case "profesor": 
        //Muestra campos
        document.getElementById("labelEsp").style.display="inline-block";
        document.getElementById("especialidad").style.display="inline-block";
        //Quita campos
        document.getElementById("labelProm").style.display="none";
        document.getElementById("promedio").style.display="none";
        break;
        default: 
        document.getElementById("labelProm").style.display="none";
        document.getElementById("promedio").style.display="none";
        document.getElementById("labelEsp").style.display="none";
        document.getElementById("especialidad").style.display="none";
    }
    
}

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateEstudent =document.querySelector("#templateEstudiante").content;
    const templateProfe = document.querySelectorAll('#templateProfesor').content;
    
    switch (typ){
        case "ESTUDIANTE":
            for(let i of students){
                const cloneTemp = templateEstudent.cloneNode(true);
                console.log(cloneTemp);
                cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
                cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()}  ${i.ape.toUpperCase()} `;
                cloneTemp.querySelector('.text-promedio').innerHTML=`PROMEDIO: ${i.prom}`;
                cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
                fragment.appendChild(cloneTemp);
            }
        break;
        case "PROFESOR":
        for(let i of profes){
            const cloneTemPro = templateProfe.cloneNode(true);
            console.log(cloneTemPro);
            cloneTemPro.querySelector('.titulo').innerHTML = '<strong> Datos Profesor </strong>';
            cloneTemPro.querySelector('.datos').innerHTML = `<i>${i.nombre.toUpperCase()} ${i.apellido.toUpperCase()}</i> ` ;
            cloneTemPro.querySelector('text-expecialidad') = ` Especialidad: <strong> ${i.especi}</strong>'`;
            fragment.appendChild(cloneTemPro);
        }

    }

    cardE.appendChild(fragment);
    cardPro.appendChild(fragment);
};

//OBJETO PARA GUARDAR DATOS DEL ESTUDIANTE 
const addStudent=(name, lastName, avg)=>{
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastName,
        prom: avg
    }
    students.push(student); //Guardar objeto dentro del arreglo students
};

//OBJETO PARA GUARDAR DATOS DEL PROFESOR
const addProfe=(nomb, apell,espe)=>{
    let prof = {
        nombre: nomb,
        apellido: apell,
        especi: espe
    }
    profes.push(prof);
};

const modalAlert=(cad)=>{ 
    //console.log(cad);
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





export{paintCard,addStudent,modalAlert, camposxRol,addProfe};
