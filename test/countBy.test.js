import { expect } from 'chai';
import countBy from '../src/countBy.js';

// NOTE: Removed multiple calls per test case: only testing the different groups of inputs
describe('countBy.js', function() {
    const foodReviews = [
        { 'name': 'Pizza', 'score': 10 },
        { 'name': 'Pasta', 'score': 10 },
        { 'name': 'Surströmming', 'score': 0 }
    ];
    it('COUNTBY-1 Test counting array of objects', function() {
        const counts = countBy(foodReviews, value => value.score);
        expect(counts).to.deep.equal({'10': 2, '0': 1});
    });
    it('COUNTBY-2 Test counting objects', function() {
        const pizza = {
            'name': 'Karim Special',
            'ingredients': [
                { 'name': 'Tomato sauce', 'amount': '3 tbsp' },
                { 'name': 'Vegan cheese', 'amount': '0.5 dl' },
                { 'name': 'Vegan salami', 'amount': '6 slices' },
                { 'name': 'Fresh chili peppers', 'amount': '4 whole peppers'}
            ]
        }
        const counts = countBy(pizza.ingredients, value => value.name);
        expect(counts).to.deep.equal({'Tomato sauce': 1, 'Vegan cheese': 1, 'Vegan salami': 1, 'Fresh chili peppers': 1});
    });
    // NOTE: changed expected results
    it('COUNTBY-3 Test countBy with illegal iteratee parameter', function() {
        expect(() => countBy(foodReviews, null)).to.throw(TypeError);
        expect(() => countBy(foodReviews, undefined)).to.throw(TypeError);
        expect(() => countBy(foodReviews, 'testi')).to.throw(TypeError);
        expect(() => countBy(foodReviews, ['testi'])).to.throw(TypeError);
        const testiObject = { 'name': 'testi' };
        expect(() => countBy(foodReviews, testiObject)).to.throw(TypeError);
        expect(() => countBy(foodReviews, 1)).to.throw(TypeError);
    });
    // NOTE: changed expected results for strings: they actually are a collection of characters
    it('COUNTBY-4 Test countBy with illegal collection parameter', function() {
        let counts = countBy(null, value => value);
        expect(counts).to.deep.equal({});
        counts = countBy(undefined, value => value);
        expect(counts).to.deep.equal({});
        counts = countBy(1, value => value);
        expect(counts).to.deep.equal({});
        counts = countBy("str", value => value);
        expect(counts).to.deep.equal({ 's': 1, 't': 1, 'r': 1});
    });
});