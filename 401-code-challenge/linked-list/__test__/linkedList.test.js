'use strict';

let LinkedList = require('../linkedList');

describe('LinkedList', ()=> {

    it('the initial constructor()', ()=> {
        let theList = new LinkedList();
        expect(theList.head).toBeNull();
        expect(theList.tail).toBeNull();
        expect(theList.length).toEqual(0);
    });

    it('insert()',()=>{
        let theList=new LinkedList();
        theList.insert(1);
        expect(theList.head.value).toEqual(1);
        expect(theList.head.next).toBeNull();
    });
    it('insert() node',()=>{
        let theList=new LinkedList;
        theList.insert("a");
        theList.append("b");
        expect(theList.head.value).toEqual(1);
        expect(theList.head.next.value).toEqual(2);
    });
    it('append()', ()=> {
        let theList = new LinkedList();
        let initialValue = 'First one';
        theList.append(initialValue);
        expect(theList.head.value).toEqual(initialValue);

        let anotherOne = 'The Second';
        theList.append(anotherOne);
        expect(theList.head.next.value).toEqual(anotherOne);
        expect(theList.head.next.next).toBeNull();
        expect(theList.head.value).toEqual(initialValue);
    });
    it('include() true the questions boluen',()=>{
        let theList=new LinkedList;
        theList.insert("a");
        theList.append("b");
        expect(theList.includes(2)).toEqual(true);
    });
    it('include() false',()=>{
        let theList=new LinkedList;
        theList.insert("a");
        theList.append("b");
        expect(theList.includes(5)).toEqual(false);
    });
    it('toStrinf()',()=>{
        let theList=new LinkedList;
        theList.insert("a");
        theList.append("b");
        expect(theList.toString()).toEqual('{1}-->{2}-->NULL');
    });
    it('toStrinf() not exisit',()=>{
        let theList=new LinkedList;
        theList.toString()
        expect(theList.head).toEqual(null);
    });


});