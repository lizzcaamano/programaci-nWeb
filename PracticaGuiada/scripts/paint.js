'use strict';
import {checkAvg} from './validate.js';
const cardE =document.getElementById('cardsEstudiantes');
const cardPro = document.getElementById('cardseProfesores');
const students = [];
const profes = [];

//Mostrando campos según el rol 

const camposxRol = (tip) =>{
    console.log(tip);
    switch (tip){
        case "estudiante": 
        console.log(tip);
        const labelPromedio = document.getElementById("labelProm");
        const inputPromedio = document.getElementById("promedio");
        
        if(inputPromedio.classList.contains('estoy-oculto') && labelPromedio.classList.contains('estoy-oculto')){
          
            inputPromedio.classList.remove('estoy-oculto');
            labelPromedio.classList.remove('estoy-oculto');
         
            labelPromedio.classList.add('estoy-visible');
            inputPromedio.classList.add('estoy-visible');
        

        }else if(inputPromedio.classList.contains('estoy-visible') && labelPromedio.classList.contains('estoy-visible')){
            
            inputPromedio.classList.remove('estoy-visible');
            labelPromedio.classList.remove('estoy-visible');

            labelPromedio.classList.add('estoy-oculto');
            inputPromedio.classList.add('estoy-oculto');

        }
       
        break;
        case "profesor": 
        const inputEdad = document.getElementById("edad");
        const labelEdad = document.getElementById("labelEdad");
        const inputEspecialidad = document.getElementById("especialidad");
        const labelEspecialidad = document.getElementById("labelEsp");
        

        if(inputEdad.classList.contains("estoy-oculto") && labelEdad.classList.contains("estoy-oculto") && inputEspecialidad.classList.contains("estoy-oculto") && labelEspecialidad.classList.contains("estoy-oculto")){
            //Oculta Campos
            inputEdad.classList.remove("estoy-oculto");
            labelEdad.classList.remove("estoy-oculto");
            labelEspecialidad.classList.remove("estoy-oculto");
            inputEspecialidad.classList.remove("estoy-oculto");
            //Muestra Campos
            inputEdad.classList.add("estoy-visible");
            labelEdad.classList.add("estoy-visible");
            labelEspecialidad.classList.add("estoy-visible");
            inputEspecialidad.classList.add("estoy-visible");

        }else if (inputEdad.classList.contains("estoy-visible") && labelEdad.classList.contains("estoy-visible") && inputEspecialidad.classList.contains("estoy-visible") && labelEspecialidad.classList.contains("estoy-visible")){
            
            inputEdad.classList.remove("estoy-visible");
            labelEdad.classList.remove("estoy-visible");
            labelEspecialidad.classList.remove("estoy-visible");
            inputEspecialidad.classList.remove("estoy-visible");

            inputEdad.classList.add("estoy-oculto");
            labelEdad.classList.add("estoy-oculto");
            labelEspecialidad.classList.add("estoy-oculto");
            inputEspecialidad.classList.add("estoy-oculto");
        }

        break;
        default: 
        const labelPromedio2 = document.getElementById("labelProm");
        const inputPromedio2 = document.getElementById("promedio");
        const inputEdad2 = document.getElementById("edad");
        const labelEdad2 = document.getElementById("labelEdad");
        const inputEspecialidad2 = document.getElementById("especialidad");
        const labelEspecialidad2 = document.getElementById("labelEsp");

        inputEdad2.classList.remove("estoy-visible");
        labelEdad2.classList.remove("estoy-visible");
        labelEspecialidad2.classList.remove("estoy-visible");
        inputEspecialidad2.classList.remove("estoy-visible");
        inputPromedio2.classList.remove('estoy-visible');
        labelPromedio2.classList.remove('estoy-visible');

        inputEdad2.classList.add("estoy-oculto");
        labelEdad2.classList.add("estoy-oculto");
        labelEspecialidad2.classList.add("estoy-oculto");
        inputEspecialidad2.classList.add("estoy-oculto");
        labelPromedio2.classList.add('estoy-oculto');
        inputPromedio2.classList.add('estoy-oculto');
         break;   
    }
    
}

const paintCard = (typ) =>{
    typ = typ.toUpperCase();

    switch (typ){
        case "PROFESOR":
            const fragmentProf = document.createDocumentFragment();
            const templateProfe = document.querySelector('#templateProfesor').content;
            for(let i of profes){
                const cloneTempProf = templateProfe.cloneNode(true);
                
                cloneTempProf.querySelector('.titulo').innerHTML = '<strong> Datos Profesor </strong>';
                cloneTempProf.querySelector('.datos').innerHTML = `${i.nombre.toUpperCase()} ${i.apellido.toUpperCase()}`;
                cloneTempProf.querySelector('.edad').innerHTML = `Edad: ${i.age}`;
                cloneTempProf.querySelector('.text-especialidad').innerHTML = `Especialidad: <strong> ${i.especi}</strong>`;
                fragmentProf.appendChild(cloneTempProf);
            }
            cardPro.appendChild(fragmentProf);
        break;

        case "ESTUDIANTE":
            const templateEstudent =document.querySelector("#templateEstudiante").content;
            const fragmentEst = document.createDocumentFragment();
            for(let i of students){
                const cloneTemp = templateEstudent.cloneNode(true);
                console.log(cloneTemp);
                cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
                cloneTemp.querySelector('.data-card').innerHTML = `${i.nom.toUpperCase()}  ${i.ape.toUpperCase()} `;
                cloneTemp.querySelector('.text-promedio').innerHTML=`Pomedio: ${i.prom}`;
                cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
                fragmentEst.appendChild(cloneTemp);
            }
            cardE.appendChild(fragmentEst);
        break;
    }
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
const addProfe=(nomb, apell,espe, age)=>{
    let prof = {
        nombre: nomb,
        apellido: apell,
        especi: espe,
        edad: age
    }
    profes.push(prof);
    console.info(profes)
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
