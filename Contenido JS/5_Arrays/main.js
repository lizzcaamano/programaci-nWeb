'use strict';

const myArray = [1,2,3,4,5,6,7,20];

let myArray2= new Array('A','b','C');

for(let i = 0; i<myArray; i++){
    console.log(myArray2[i]);
}

for (let j in myArray){
    console.log(myArray[j]);
}

for (let k of myArray2){
    console.log(k);
}

