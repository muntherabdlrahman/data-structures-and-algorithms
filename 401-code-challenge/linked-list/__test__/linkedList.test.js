'use strict';

let LinkedList = require('../linkedList');

describe('LinkedList', ()=> {

    it('the initial constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
        expect(newList.tail).toBeNull();
        expect(newList.length).toEqual(0);
    });

    it('insert()',()=>{
        let newList=new LinkedList();
        newList.insert(1);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next).toBeNull();
    });
    it('insert() many node',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next.value).toEqual(2);
    });
    it('append()', ()=> {
        let newList = new LinkedList();
        let initialValue = 'First Item';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });
    it('include() tru',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(2)).toEqual(true);
    });
    it('include() false',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(5)).toEqual(false);
    });
    it('toStrinf()',()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.toString()).toEqual('{1}-->{2}-->NULL');
    });
    // it('toStrinf() not exisit',()=>{
    //     let newList=new LinkedList;
    //     newList.toString()
    //     expect(newList.head).toEqual(null);
    // });


});