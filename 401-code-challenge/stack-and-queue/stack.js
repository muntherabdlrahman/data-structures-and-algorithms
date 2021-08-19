"use strict";

const Node=require('./node');

class Stack{
    constructor(){
        this.top=null
    }

    push(value){
        let newNode=new Node(value);
        if(this.top){
            newNode.next=this.top;
            this.top=newNode;
        }
        this.top=newNode;
    }

    pop(){
        if(this.top){
            let current =this.top;
            let reomvedItem=this.top.value;
            this.top=current.next;
            return reomvedItem;
        }
        throw new Error('the stack is empty');
    }

    peek(){
        let value;
        if(this.top){
            value=this.top.value;
            return value;
        }
        throw new Error('the stack is empty');
    }

    isEmpty(){
        if(!this.top){
            throw new Error('the stack is empty'); 
        }
        return 'the stack have values'
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.top.next);


module.exports=Stack;