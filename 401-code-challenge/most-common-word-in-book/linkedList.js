"use strict";
const Node=require("./node");

class LinkedList {
    constructor(){
        this.head=null;
    }

    append(value){
        const node =new Node(value);
        if(!this.head){
            this.head=node;
            return;
        }
        let current =this.head;
        while(current.next){
            current=current.next;
        }
        current.next=node;

    }


    getData(){
        if (!this.head){
            return "empty";
        }
        let current=this.head;
        let newArray=[];
        while(current){
            newArray.push(current.value);
            current=current.next;
        }
        return newArray;
    
    }

}

module.exports=LinkedList;