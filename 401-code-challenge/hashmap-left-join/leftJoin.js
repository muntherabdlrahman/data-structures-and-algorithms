"use strict";
const HashTable=require('./hashTable');

function leftJoin(leftHashMap,rightHashMap){
    rightHashMap.map.forEach(bucket=>{
        if (leftHashMap.contain(bucket.head.val[key])) {
            let current=bucket.head;
            while (current.next) {
               leftHashMap.add(current.val[key],current.val[key]); 
            }
            leftHashMap.add(current.val[key],current.val[key]);
        }
    });
    return leftHashMap;
}

let left = new HashTable(3);
let right = new HashTable(3);

left.add('fond', 'enamored');
left.add('wrath', 'anger');
left.add('diligent', 'employed');

right.add('fond', 'averse');
right.add('wrath', 'delight');
right.add('diligent', 'idle');

console.log(leftJoin(left,right));