const repeatedWord =require('../repatedWord');

describe('first repeated word ',()=>{
    it('return first repeated word',()=>{
        let str="Success is walking from failure to failure with no loss of enthusiasm";
        let expected="failure"
        expect(repeatedWord(str)).toEqual(expected);
    })
    it('return first repeated word regardless of cast (captel/small)',()=>{
        let str="Success is walking from failure to Failure with no loss of enthusiasm";
        let expected="failure"
        expect(repeatedWord(str)).toEqual(expected);
    })
    it('return null if there not repeated word ',()=>{
        let str="When it comes to success, there are no shortcuts";
        expect(repeatedWord(str)).toBeNull();
    })
})