const redundantWordChecker = require('../redundantWordChecker');

describe('Repeated Word Generator', function () {
    // Success test cases
    it('should return whether the words are repeated ', function () {
        const val = redundantWordChecker('These words are repeating words', ' ');
        expect(val).toStrictEqual("String contains repeating words");
    });
    it('should return whether the words are not repeated ', function () {
        const val = redundantWordChecker('These words are not repeating', ' ');
        expect(val).toStrictEqual("Strings does not contain repeating words");
    });
    it('should consider default delimiter to be space when not specified', function () {
        const val = redundantWordChecker('These words are not repeating');
        expect(val).toStrictEqual("Strings does not contain repeating words");
    });

    // Failure test cases
    it('should throw an error for any input other than string', function () {
        expect(() => {
            redundantWordChecker(123123, ' ');
        }).toThrow('You must enter a string');
    });

    it('should throw an error for larger string', function () {
        expect(() => {
            redundantWordChecker('asdfggtsgdhsgdyyrewerrt uiuiuifsfskjhkj kjhdkffsjkjh asdfggfsftrewerrt uiuiuikjhkj kjhdkjkjh    asdfggtrewerrt uiuiuikjhkj kjhdkjkjh  asdfggtrewerrt uiuiuikjhkj kjhdkjkjh asdfggtrewerrt uiuiuikjhkj kjhdkjkjh#####asdfggtrewerrt uiuiuikjhkj kjhdkjkjhasdfggtrewerrt uiuiuikjhkj kjhdkjkjh', ' ');
        }).toThrow('String length has to be less than or equal to 100');
    });

    it('should throw an error when input string is not specified', function () {
        expect(() => {
            redundantWordChecker('', ' ');
        }).toThrow('Empty String not accepted');
    });
    it('should throw an error when string not provided', function () {
        expect(() => {
            redundantWordChecker();
        }).toThrow('Enter a string');
    });
})