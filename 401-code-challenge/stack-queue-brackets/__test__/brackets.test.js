'use strict'

const validateBrackets=require('../stack-queue-brackets')


describe("validateBrackets ", () => {
    it(" brackets in the string are balanced", () => {
        let test = validateBrackets('[({})]')
       
        expect(test).toBe(true);
      });

      it(" brackets in the string are not balanced", () => {
        let test = validateBrackets('[({}]')
       
        expect(test).toBe(false);
      });

    })