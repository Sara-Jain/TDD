const redundantWordChecker = require('../redundantWordChecker');

describe('Repeated Word Generator',function(){
    // Succes test cases
    it('should return whether the words are repeated ',function(){
        const val = redundantWordChecker('These words are repeating words',' ');
        expect(val).toStrictEqual("String contains repeating words");
    });
    it('should return whether the words are not repeated ',function(){
        const val = redundantWordChecker('These words are not repeating',' ');
        expect(val).toStrictEqual("Strings does not contain repeating words");
    });
})