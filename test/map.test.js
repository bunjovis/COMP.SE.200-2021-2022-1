import { expect } from "chai";
import map from "../src/map.js";
import { testIterateeMultiplyFunction, testIterateeStringConcateFunction, testIterateeObjectWithReturn, testIterateeObjectWithoutReturn } from "./helpers/helpers.js";

describe("map.js", () => {
    it("MAP-1 test map function with an array of numbers and iteratee function", () => {
        expect(map([2, 10], testIterateeMultiplyFunction)).to.deep.equal([4,100]);
    });
    it("MAP-2 test map function with an array of strings and iteratee function", () => {
        expect(map(['Moi!', 'Hei!'], testIterateeStringConcateFunction)).to.deep.equal(['Moi! Moi!','Hei! Hei!']);
    });
    it("MAP-3 test map function with an array of objects and iteratee function", () => {
        expect(map([{ "name" : "Cookie Monster", "hobby" : "eating"}, { "name" : "Kermit", "hobby" : "dancing"}], testIterateeObjectWithReturn)).to.deep.equal(['Cookie Monster', 'Kermit']);
    });
    it("MAP-4 test map function with an array of objects and iteratee function not returning a value", () => {
        expect(map([{ "name" : "Cookie Monster", "hobby" : "eating"}, { "name" : "Kermit", "hobby" : "dancing"}], testIterateeObjectWithoutReturn)).to.deep.equal([undefined, undefined]);
    });
    it("MAP-5 test map function with an array and no iteratee function", () => {
        expect(() => map([{ "name" : "Cookie Monster", "hobby" : "eating"}, { "name" : "Kermit", "hobby" : "dancing"}]).to.throw(TypeError, 'iteratee is not a function'));
    });
    //Note: MAP-6 new test case added to cover full branch coverage for map
    it("MAP-6 test map function with null value as array parameter and iteratee function", () => {
        expect(map(null, testIterateeStringConcateFunction)).to.deep.equal([]);
    });
});