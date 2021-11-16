import { expect } from "chai";
import filter from "../src/filter.js";

const puppets = [{ "name" : "Cookie Monster", "hobby" : "eating", "healthy" : true}, { "name" : "Kermit", "hobby" : "dancing", "healthy" : false}];
const superHeroes = ["Batman", "Superman", "Spiderman"];
const numbers = [2,4,6,8];
const mixedArr = [{ "name" : "Cookie Monster", "hobby" : "eating", "healthy" : true}, "Batman", 2];


describe("filter.js", () => {
    it("FILTER-1 Test filter function with array of objects with a matching object property as filter parameter", () => {
        expect(filter(puppets, ({healthy}) => healthy)).to.deep.equal([{ "name" : "Cookie Monster", "hobby" : "eating", "healthy" : true}]);
    });
    it("FILTER-2 Test filter function with array of objects with a non-matching object property as filter parameter", () => {
        expect(filter(puppets, ({color}) => color)).to.deep.equal([[]]);
    });
    it("FILTER-3 Test filter function with array of strings with a matching string as filter parameter", () => {
        expect(filter(superHeroes, (string) => string === "Superman")).to.deep.equal(["Superman"]);
    });
    it("FILTER-4 Test filter function with array of strings with a non-matching string as filter parameter.", () => {
        expect(filter(superHeroes, (string) => string === "Flash")).to.deep.equal([[]]);
    });
    it("FILTER-5 Test filter function with array of numbers with a matching number as filter parameter", () => {
        expect(filter(numbers, (number) => number === 2)).to.deep.equal([2]);
    });
    it("FILTER-6 Test filter function with array of numbers with a non-matching value as filter parameter", () => {
        expect(filter(numbers, (number) => number === 52)).to.deep.equal([[]]);
    });
    it("FILTER-7 Test filter function with array of mixed type values with a matching value as filter parameter.", () => {
        expect(filter(mixedArr, (number) => number === 2)).to.deep.equal([2]);
    });
    it("FILTER-8 Test filter function with array of mixed type values with a matching value as filter parameter.", () => {
        expect(filter(mixedArr, (number) => number === 52)).to.deep.equal([[]]);
    });
    //Note: FILTER-9 new test case added to cover full line coverage for filter
    it("FILTER-9 Test filter function with null as array", () => {
        expect(filter(null, (number) => number === 2)).to.deep.equal([[]]);
    });
});