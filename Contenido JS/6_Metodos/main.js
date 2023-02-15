'use strict';

//SPLIT
/*let cad = "enero_febrero_marzo_abril_mayo_junio";
let myArray1 = cad.split("_");
console.log(myArray1);
*/
//FILTER
const myArray2 = [1,2,3,4,5,6,7,20];
const arrayResult = myArray2.filter((e)=> e % 2 === 0);

console.log(arrayResult);


//Método push
myArray2.push(4520);
console.log(myArray2);

/*
TO DO
+ Consultar un método que haga algo con los arreglos
*/
