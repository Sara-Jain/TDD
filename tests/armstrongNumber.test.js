const functionObject = require('../armstrongNumberGenerator.js');

describe('armstrongNumberGenerator', function () {
    // Test cases for number of digit
    // success test cases
    it('should return number of digits', function () {
        const val = functionObject.numberOfDigit(12);
        expect(val).toBe(2);
    });

    // // Failure test cases
    it('should throw invalid input when number is not given as input', function () {
        expect(() => {
            functionObject.numberOfDigit("random");
        }).toThrow('You must enter a integer value');
    });
    it('should throw invalid input when float value is given as input', function () {
        expect(() => {
            functionObject.numberOfDigit(122.89);
        }).toThrow('You must enter a integer value');
    });
    it('should prompt to enter the value when no input is given', function () {
        expect(() => {
            functionObject.numberOfDigit();
        }).toThrow('Enter a integer value');
    });

    // Test cases for isArmstrongNumber
    // Failure test cases
    it('should throw invalid input when float value is given as input', function () {
        expect(() => {
            functionObject.isArmstrongNumber(122.89);
        }).toThrow('You must enter a integer value');
    });
    it('should throw invalid input when number is not given as input', function () {
        expect(() => {
            functionObject.isArmstrongNumber("random");
        }).toThrow('You must enter a integer value');
    });
    it('should return Negative value not allowed for negative value', function () {
        expect(() => {
            functionObject.isArmstrongNumber(-213);
        }).toThrow('You must enter a positive integer value');
    });
    it('should throw error when integer range exceeded', function () {
        expect(() => {
            functionObject.isArmstrongNumber(32768);
        }).toThrow('Input value range exceeded');
    });

    // Success test cases
    it('should return true when it is a armstrong numbers', function () {
        const val = functionObject.isArmstrongNumber(153);
        expect(val).toStrictEqual(true);
    });
    it('should return only armstrong numbers within the given range', function () {
        const val = functionObject.ArmstrongGenerator(5);
        expect(val).toStrictEqual([0, 1, 2, 3, 4, 5]);
    });
})