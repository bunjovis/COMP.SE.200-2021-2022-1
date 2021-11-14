import { expect } from 'chai';
import add from '../src/add.js';
import { getRandomPositiveInteger } from './helpers/helpers.js';

// NOTE: Removed multiple calls per test case: only testing the different groups of inputs
describe('add.js', function() {
    it('ADD-1 Test adding positive numbers', function() {
        const firstNumber = getRandomPositiveInteger(10000);
        const secondNumber = getRandomPositiveInteger(10000);
        expect(add(firstNumber,secondNumber)).to.equal(firstNumber+secondNumber);
    });
    it('ADD-2 Test adding negative numbers', function() {
        const firstNumber = getRandomPositiveInteger(10000);
        const secondNumber = getRandomPositiveInteger(10000);
        expect(add(-firstNumber,-secondNumber)).to.equal(-firstNumber+(-secondNumber));
    });
    // NOTE: Added testing both ways, positive first and negative first
    it('ADD-3 Test adding positive and negative numbers', function() {
        let firstNumber = getRandomPositiveInteger(10000);
        let secondNumber = getRandomPositiveInteger(10000);
        expect(add(firstNumber,-secondNumber)).to.equal(firstNumber+(-secondNumber));
        firstNumber = getRandomPositiveInteger(10000);
        secondNumber = getRandomPositiveInteger(10000);
        expect(add(-firstNumber,secondNumber)).to.equal(-firstNumber+secondNumber);
    });
    // NOTE: Added testing both ways, zero first and last
    it('ADD-4 Test adding zero', function() {
        let firstNumber = 0;
        let secondNumber = getRandomPositiveInteger(10000);
        expect(add(firstNumber,secondNumber)).to.equal(firstNumber+(secondNumber));
        firstNumber = getRandomPositiveInteger(10000);
        secondNumber = 0;
        expect(add(firstNumber,secondNumber)).to.equal(firstNumber+secondNumber);
    });
    /*  NOTE: I made incorrect assumption that add-function had default-value of 0
        and that numbers over Number.MAX_VALUE would be undefined so result would be 0.
        Changed 0 to Infinity
    */
    it('ADD-5 Test too big result', function() {
        const firstNumber = Number.MAX_VALUE-1;
        const secondNumber = Number.MAX_VALUE-1;
        expect(add(firstNumber,secondNumber)).to.equal(Infinity);
    });
    /*  NOTE: I made incorrect assumption that add-function had default-value of 0
        and that numbers under -Number.MAX_VALUE would be undefined so result would be 0.
        Changed 0 to -Infinity
    */
    // NOTE: Changed Number.MIN_VALUE to -Number.MAX_VALUE
    it('ADD-6 Test too small result', function() {
        const firstNumber = -Number.MAX_VALUE+1;
        const secondNumber = -Number.MAX_VALUE+1;
        expect(add(firstNumber,secondNumber)).to.equal(-Infinity);
    });
    it('ADD-7 Test undefined values', function() {
        let firstNumber = undefined;
        let secondNumber = getRandomPositiveInteger(10000);
        expect(add(firstNumber,secondNumber)).to.equal(secondNumber);
        firstNumber = getRandomPositiveInteger(10000);
        secondNumber = undefined;
        expect(add(firstNumber,secondNumber)).to.equal(firstNumber);
        firstNumber = undefined;
        secondNumber = undefined;
        expect(add(firstNumber,secondNumber)).to.equal(0);
    });
    it('ADD-8 Test string values (numbers)', function() {
        const firstNumber = `${getRandomPositiveInteger(10000)}`;
        const secondNumber = `${getRandomPositiveInteger(10000)}`;
        expect(add(firstNumber,secondNumber)).to.equal(firstNumber+secondNumber);
    });
    // NOTE: Changed the expected result from 0 to NaN
    it('ADD-9 Test string values (non-numbers)', function() {
        const firstNumber = "one";
        const secondNumber = "two";
        expect(add(firstNumber,secondNumber)).to.equal(NaN);
    });
    // NOTE: Changed the expected result from 0 to NaN
    it('ADD-10 Test objects', function() {
        const firstNumber = { number: 1 };
        const secondNumber = { number: 2 };
        expect(add(firstNumber,secondNumber)).to.deep.equal(NaN);
    });
    // NOTE: null input added
    it('ADD-11 Test adding null', function() {
        const firstNumber = getRandomPositiveInteger(10000);
        const secondNumber = null;
        expect(add(firstNumber,secondNumber)).to.deep.equal(firstNumber);
    });
});