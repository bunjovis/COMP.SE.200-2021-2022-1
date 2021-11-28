import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice.js", () => {
    it("SLICE-1 test slice function with an array of numbers and positive start index with no end index", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, 2)).to.deep.equal([6,8]);
    });
    it("SLICE-2 test slice function with an array of numbers and positive start index with positive end index.", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, 1, 3)).to.deep.equal([4,6]);
    });
    it("SLICE-3 test slice function with an array of numbers and positive start index with negative end index.", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, 1, -2)).to.deep.equal([4]);
    });
    it("SLICE-4 test slice function with an array of numbers and negative start index with no end index", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, -1)).to.deep.equal([8]);
    });
    it("SLICE-5 test slice function with an array of numbers and negative start index with positive end index", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, -3, 3)).to.deep.equal([4,6]);
    });
    it("SLICE-6 test slice function with an array of numbers and negative start index with negative end index", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, -4, -3)).to.deep.equal([2]);
    });
    it("SLICE-7 that slice function works property with array of numbers and no start index", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray)).to.deep.equal([2,4,6,8]);
    });
    //Note: SLICE-8 SLICE-9 SLICE-10 SLICE-11 new test cases added to cover full branch coverage for slice
    it("SLICE-8 that slice function works property with empty array and no start and end index", () => {
        const testArray = [];
        expect(slice(testArray)).to.deep.equal([]);
    });
    it("SLICE-9 that slice function works property with null value as array with no start and end index", () => {
        expect(slice(null)).to.deep.equal([]);
    });
    it("SLICE-10 test slice function with an array of numbers and negative start index with negative end index and start index is greater than array length", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, -5, -3)).to.deep.equal([2]);
    });
    it("SLICE-11 test slice function with an array of numbers and positive start index with positive end index and start index is greater than array length", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, 5, 4)).to.deep.equal([]);
    });
    it("SLICE-12 test slice function with an array of numbers and positive start index with positive end index and end index is greater than array length", () => {
        const testArray = [2, 4, 6, 8];
        expect(slice(testArray, 3, 6)).to.deep.equal([8]);
    });
    it("SLICE-13 test slice function with an array of numbers and positive start index with positive end index and both start and end index is greater than array length", () => {
        const testArray = [2, 4, 6, 8]; 
        expect(slice(testArray, 5, 7)).to.deep.equal([]);
    });
    
});