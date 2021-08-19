"use strict";

const Node=require('./node');

class Queue{
    constructor(){
        this.front=null;
        this.back=null;
    }

    enqueue(value){
        let newNode=new Node(value);
        if(!this.front){
            this.front=newNode;
            this.back=newNode;
        }else{
            this.back.next=newNode;
            this.back=newNode;
        }
    }

    dequeue(){
        if(!this.front){
            throw new Error('the Queue is empty'); 
        }
        let lastNode=this.front;
        if(this.front===this.back){
            this.back=null;
        }
        this.front=this.front.next;

        return lastNode.value;
    }

    peek(){
        let value;
        if (this.front) {
            value=this.front.value;
            return value
        }
        throw new Error('the Queue is empty'); 
    }

    isEmpty(){
        if(!this.front){
            throw new Error('the Queue is empty'); 
        }
        return 'the Queue have values'
    }
    
}

let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue);

module.exports=Queue;