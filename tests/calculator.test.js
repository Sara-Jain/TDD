// add function

// success case
//  should give the sum of 2 numbers
//  should return the input directly only 1 number is given
//  should return the sum of first 2 numbers when more than 2 inputs are given

// failure
//  should throw invalid input when array given as input
//  should throw invalid input when string given as input
//  should throw error when integer raange exceeded

const add = require('../calculator');

describe('add function', function () {
    it('should give the sum of 2 numbers', function () {
        const sum = add(2, 3);
        expect(sum).toBe(5);
    });
    it('should return the input directly only 1 number is given', function () {
        const sum = add(2);
        expect(sum).toBe(2);
    });
    it('should return the sum of first 2 numbers when more than 2 inputs are given', function () {
        const sum = add(2, 3, 4, 6);
        expect(sum).toBe(5);
    });
});