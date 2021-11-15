import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst.js', () => {
    it('UPPERFIRST-1 test upperFirst function with a string of all lowercase characters', () => {
        const lowerCaseString = "hello world!";
        expect(upperFirst(lowerCaseString)).to.equal('Hello world!');
    });
    it('UPPERFIRST-2 test upperFirst function with a string of all uppercase characters', () => {
        const upperCaseString = "I HAVE A CAT";
        expect(upperFirst(upperCaseString)).to.equal('I HAVE A CAT');
    });
    it('UPPERFIRST-3 test upperFirst function with a string of mixed uppercase and lowercase characters', () => {
        const mixedCaseString = "tHis Is A Mixed StrinG";
        expect(upperFirst(mixedCaseString)).to.equal('THis Is A Mixed StrinG');
    });
    it('UPPERFIRST-4 test upperFirst function with a string with number as first character', () => {
        const numberFirstString = "5 bottles of milk";
        expect(upperFirst(numberFirstString)).to.equal('5 bottles of milk');
    });
    //Note: UPPERFIRST-5 is not available in test plan (part-1) due to mistake in numbering the tests
    it('UPPERFIRST-6 test upperFirst function with a string with symbol as first character', () => {
        const symbolFirstString = "%tampere university";
        expect(upperFirst(symbolFirstString)).to.equal('%tampere university');
    });
    it('UPPERFIRST-7 test upperFirst function without a parameter', () => {
        expect(upperFirst()).to.equal('');
    });
    it('UPPERFIRST-8 test upperFirst function with number as parameter', () => {
        const number = 123;
        expect(() => upperFirst(number).to.throw(TypeError, 'string.slice is not a function'));
    });

});