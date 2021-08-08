'use strict';
let array1=[1,2,3,4,5,6]

let reversArray=(arr)=>{
    let newArray=[];
    for (let i=0;i<arr.length;i++){
        newArray.push(arr[(arr.length-1)-i]);
    }
    return newArray
};
console.log(reversArray(array1))