import { expect } from 'chai';
import ceil from '../src/ceil.js';

// NOTE: Removed multiple calls per test case: only testing the different groups of inputs
describe('ceil.js', function() {
    it('CEIL-1 Test rounding positive decimal number with no precision', function() {
        const decimalNumber = 1.23;
        const ceiled = ceil(decimalNumber);
        expect(ceiled).to.equal(2);
    });
    it('CEIL-2 Test rounding positive integer number with no precision', function() {
        const integerNumber = 1;
        const ceiled = ceil(integerNumber);
        expect(ceiled).to.equal(1);
    });
    it('CEIL-3 Test rounding positive decimal number with positive precision', function() {
        const decimalNumber = 1.23;
        const ceiled = ceil(decimalNumber,1);
        expect(ceiled).to.equal(1.3);
    });
    it('CEIL-4 Test rounding positive decimal number with negative precision', function() {
        const decimalNumber = 114.23;
        const ceiled = ceil(decimalNumber,-1);
        expect(ceiled).to.equal(120);
    });
    it('CEIL-5 Test rounding negative decimal number with negative precision', function() {
        const decimalNumber = -114.23;
        const ceiled = ceil(decimalNumber,-1);
        expect(ceiled).to.equal(-110);
    });
    it('CEIL-6 Test rounding negative decimal number with positive precision', function() {
        const decimalNumber = -114.23;
        const ceiled = ceil(decimalNumber,1);
        expect(ceiled).to.equal(-114.2);
    });
    it('CEIL-7 Test rounding positive integer number with positive precision', function() {
        const integerNumber = 101;
        const ceiled = ceil(integerNumber,2);
        expect(ceiled).to.equal(101);
    });
    it('CEIL-8 Test rounding positive integer number with negative precision', function() {
        const integerNumber = 1140;
        const ceiled = ceil(integerNumber,-2);
        expect(ceiled).to.equal(1200);
    });
    it('CEIL-9 Test rounding negative integer number with positive precision', function() {
        const integerNumber = -101;
        const ceiled = ceil(integerNumber,2);
        expect(ceiled).to.equal(-101);
    });
    it('CEIL-10 Test rounding negative integer number with negative precision', function() {
        const integerNumber = -1140;
        const ceiled = ceil(integerNumber,-2);
        expect(ceiled).to.equal(-1100);
    });
    it('CEIL-11 Test rounding illegal number values with legal precision', function() {
        const illegalValues = [
            Number.MAX_VALUE*2,
            -Number.MAX_VALUE*2,
            "one",
            { number: 1 }
        ]
        for (const value of illegalValues) {
            const ceiled = ceil(value, 1);
            expect(ceiled).to.deep.equal(NaN);
        }        
    });
    // NOTE: moved too big and small values to their own case
    it('CEIL-12 Test rounding legal number values with illegal precision', function() {
        const illegalValues = [
            "one",
            { number: 1 }
        ]
        for (const value of illegalValues) {
            const ceiled = ceil(1.23, value);
            expect(ceiled).to.deep.equal(2);
        }        
    });
    // NOTE: instead of error, NaN
    it('CEIL-13 Test ceil with no parameters', function() {
        const ceiled = ceil();
        expect(ceiled).to.deep.equal(NaN);
    });
    // NOTE: new test case added. Test with infinite values. Precision must be between -292 and 292, so the last
    // result is because of that.
    it('CEIL-14 Test rounding legal number values with infinite precisions', function() {
        let ceiled = ceil(1.23, Number.MAX_VALUE*2);
        expect(ceiled).to.deep.equal(1.23);    
        ceiled = ceil(1.23, -Number.MAX_VALUE*2);
        expect(ceiled).to.deep.equal(1e+292);   
    });
});