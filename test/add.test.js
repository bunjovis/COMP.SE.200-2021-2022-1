import { expect } from 'chai';
import add from '../src/add.js';
import { getRandomPositiveInteger } from './helpers/helpers.js';

// NOTE: Testing each test case 10 times with different numbers
describe('add.js', function() {
    it('ADD-1 Test adding positive numbers', function() {
        for (let i=1;i<10;i++) {
            let firstNumber = getRandomPositiveInteger(10000);
            let secondNumber = getRandomPositiveInteger(10000);
            expect(add(firstNumber,secondNumber)).to.equal(firstNumber+secondNumber);
        }
    });
    it('ADD-2 Test adding negative numbers', function() {
        for (let i=1;i<10;i++) {
            let firstNumber = getRandomPositiveInteger(10000);
            let secondNumber = getRandomPositiveInteger(10000);
            expect(add(-firstNumber,-secondNumber)).to.equal(-firstNumber+(-secondNumber));
        }
    });
    // NOTE: Added testing both ways, positive first and negative first
    it('ADD-3 Test adding positive and negative numbers', function() {
        for (let i=1;i<10;i++) {
            let firstNumber = getRandomPositiveInteger(10000);
            let secondNumber = getRandomPositiveInteger(10000);
            expect(add(firstNumber,-secondNumber)).to.equal(firstNumber+(-secondNumber));
        }
        for (let i=1;i<10;i++) {
            let firstNumber = getRandomPositiveInteger(10000);
            let secondNumber = getRandomPositiveInteger(10000);
            expect(add(-firstNumber,secondNumber)).to.equal(-firstNumber+secondNumber);
        }
    });
    // NOTE: Added testing both ways, zero first and last
    it('ADD-4 Test adding zero', function() {
        for (let i=1;i<10;i++) {
            let firstNumber = 0;
            let secondNumber = getRandomPositiveInteger(10000);
            expect(add(firstNumber,secondNumber)).to.equal(firstNumber+(secondNumber));
        }
        for (let i=1;i<10;i++) {
            let firstNumber = getRandomPositiveInteger(10000);
            let secondNumber = 0;
            expect(add(firstNumber,secondNumber)).to.equal(firstNumber+secondNumber);
        }
    });
    it('ADD-5 Test too big result', function() {
        let firstNumber = Number.MAX_VALUE-1;
        let secondNumber = Number.MAX_VALUE-1;
        expect(add(firstNumber,secondNumber)).to.equal(0);
    });
    // NOTE: Changed Number.MIN_VALUE to -Number.MAX_VALUE
    it('ADD-6 Test too small result', function() {
        let firstNumber = -Number.MAX_VALUE+1;
        let secondNumber = -Number.MAX_VALUE+1;
        expect(add(firstNumber,secondNumber)).to.equal(0);
    });
});