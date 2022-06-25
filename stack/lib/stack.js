'use strict';

const Node= require('./Node');

class stack{
    constructor(){
        this.top= null;
        this.length= 0;

    }

    isEmpty(){
        if(this.top===null){
            return true;
        }else{
            return false;
        }
    }

    push(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.top= newNode;

        }else{
            newNode.next = this.top;
            this.top= newNode;
        }
    
    }
    pop(){
        if(this.isEmpty()){
            console.log("no nodes are left in stack");
            return false;
        }else{
            const temp= this.top;
            this.top = this.top.next;
            temp.next=null;
            return temp.value;

        }
    }
    peek(){
        if(this.isEmpty()){
            return "no nodes in the stack";
        }else{
            return this.top.value;
        }
    }

}
module.exports= stack;