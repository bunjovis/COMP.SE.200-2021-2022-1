import { expect } from "chai";
import get from "../src/get.js";

describe('get.js', () => {
    it('GET-1 test get function with a valid path as string', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, 'cat[0].body.legs')).to.equal(4);
    });
    it('GET-2 test get function with a valid path as string and default value as parameter', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, 'cat[0].body.legs', 2)).to.equal(4);
    });
    it('GET-3 test get function with an invalid path as string', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, 'cat[4].body.legs')).to.equal(undefined);
    });
    it('GET-4 test get function with an invalid path as string and default value as parameter.', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, 'cat[4].body.legs', 2)).to.equal(2);
    });
    it('GET-5 test that get function works properly with valid path as array', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, ['cat', '0', 'body', 'legs'])).to.equal(4);
    });
    it('GET-6 test get function with a valid path as array and default value as parameter', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, ['cat', '0', 'body', 'legs']), 2).to.equal(4);
    });
    it('GET-7 test get function with an invalid path as array', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, ['cat', '4', 'body', 'head'])).to.equal(undefined);
    });
    it('GET-8 test get function with an invalid path as array and default value as parameter', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(testObject, ['cat', '4', 'body', 'head'], 2)).to.equal(2);
    });
    //Note: GET-9 and GET-10 new test cases added to cover full branch coverage for get
    it('GET-9 test get function with null value and an invalid path', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(null, ['cat', '4', 'body', 'head'])).to.equal(undefined);
    });
    it('GET-10 test get function with null value and an invalid path default value as parameter', () => {
        const testObject = { 'cat': [{ 'body': { 'legs': 4 } }] };
        expect(get(null, ['cat', '4', 'body', 'head'], 2)).to.equal(2);
    });
});