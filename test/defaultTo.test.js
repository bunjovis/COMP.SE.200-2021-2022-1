import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';
import { getRandomPositiveInteger } from './helpers/helpers.js';

// NOTE: Removed multiple calls per test case: only testing the different groups of inputs
describe('defaultTo.js', function() {
    it('DEFAULTTO-1 Test with legal positive numbers as value', function() {
        const num1 = getRandomPositiveInteger(10000);
        const num2 = getRandomPositiveInteger(10000);
        const num = defaultTo(num1,num2);
        expect(num).to.equal(num1);
    });
    it('DEFAULTTO-2 Test with legal negative numbers as value', function() {
        const num1 = -getRandomPositiveInteger(10000);
        const num2 = getRandomPositiveInteger(10000);
        const num = defaultTo(num1,num2);
        expect(num).to.equal(num1);
    });
    // NOTE: removed test 3: There is no such thing as illegal number
    // NOTE: removed strings, objects and arrays from test 4. they're not illegal value
    it('DEFAULTTO-4 Test with illegal non-numbers as value', function() {
        const defaultNum = getRandomPositiveInteger(10000);
        let num = defaultTo(null,defaultNum);
        expect(num).to.equal(defaultNum);
        num = defaultTo(undefined,defaultNum);
        expect(num).to.equal(defaultNum);
        num = defaultTo(NaN,defaultNum);
        expect(num).to.equal(defaultNum);
    });
    // NOTE: removed test 5: There is no such thing as illegal number, besides this should only return the legal number value
    // NOTE: removed test 6: There is no such thing as illegal number
});