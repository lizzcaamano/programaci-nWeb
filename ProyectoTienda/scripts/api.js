'use strict';

/*
*PETICIONES:
fetch -> JS
Axios -> libreria
promesas  <--- 
request then |


Async 
Await
*/

fetch('https://jsonplaceholder.typicode.com/todos')
.then( (response) => response.json())
.then((json)=>{
    for(let object of json){
        console.log(object);
    }
})
.catch((error)=>console.error(error))
.finally(console.info("Ha finalizado la petición"))