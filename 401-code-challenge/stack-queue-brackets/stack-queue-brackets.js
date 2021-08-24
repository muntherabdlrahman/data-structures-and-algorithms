'use strict'


const rackets =(string)=> {
    const withStack = [];
    const brackets = { 
        ')': '(', 
        '}': '{', 
        ']': '['
    };
  for (const sample of string) {
        
      if (!brackets[sample]){
         withStack.push(sample); 
      } 
      else if (withStack.pop() !== brackets[sample]){
          return false;
      } 
    }
    return withStack.length === 0;
  };

  let test=rackets('({{{}}})')
//   let test1=rackets('({{{}})')
  let test1=rackets('{{{})')

console.log(test);
console.log(test1);

module.exports=rackets