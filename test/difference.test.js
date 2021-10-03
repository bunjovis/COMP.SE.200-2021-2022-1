import { expect } from 'chai';
import difference from '../src/difference.js';
/**
 * This is just a placeholder script to test if the system works.
 */
describe('difference.js', function() {
    it('should work', (done) => {

        let diff1 = difference([2, 1], [2, 3]);
        let diff2 = difference("stgins", [2, 3]);
        expect(diff1).to.deep.equal([1]);
        expect(diff2).to.deep.equal([]);
        done();
    });
});