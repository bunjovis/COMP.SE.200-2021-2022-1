import { expect } from 'chai';
import chunk from '../src/chunk.js';

// NOTE: Removed multiple calls per test case: only testing the different groups of inputs
describe('chunk.js', function() {
    it('CHUNK-1 Test chunk with no size parameter', function() {
        const array = ['a','b','c'];
        const chunked = chunk(array);
        expect(chunked).to.equal([['a'],['b'],['c']]);
    });
    it('CHUNK-2 Test chunk with positive size parameter', function() {
        const array = ['a','b','c'];
        const chunked = chunk(array,2);
        expect(chunked).to.equal([['a','b'],['c']]);
    });
    it('CHUNK-3 Test chunk with illegal size parameter', function() {
        const array = ['a','b','c'];
        const illegalValues = [
            -1, 
            0.5,
            "two",
            ["one", "two"],
            null,
            undefined
        ]
        for (const value of illegalValues) {
            const chunked = chunk(array,value);
            expect(chunked).to.deep.equal([]);
        }
    });
    it('CHUNK-4 Test chunk with no parameters', function() {
        const chunked = chunk();
        expect(chunked).to.deep.equal([]);
    });
    it('CHUNK-5 Test chunk with only size parameter', function() {
        const chunked = chunk(3);
        expect(chunked).to.deep.equal([]);
    });
    it('CHUNK-6 Test chunk with illegal array parameter', function() {
        const illegalValues = [
            [], 
            0.5,
            null,
            undefined,
            { a: 1, b: 2},
            "two"
        ]
        for (const value of illegalValues) {
            const chunked = chunk(value,2);
            expect(chunked).to.deep.equal([]);
        }
    });
    it('CHUNK-7 Test chunk with array of arrays', function() {
        const array = [['a','b'],['c','d']];
        const chunked = chunk(array);
        expect(chunked).to.equal([[['a','b']],[['c','d']]]);
    });
});