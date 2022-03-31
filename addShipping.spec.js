const addShipping = require('./addShipping');

describe('addShipping', () => {
    it('for no orders, return empty array', () => {
        const updatedOrders = addShipping(10, []);
        expect(updatedOrders).toEqual([]);
    })
    it('for one order, add shipping cost to newPrice', () => {
        const updatedOrders = addShipping(10, [{
            newPrice: 20
        }]);
        expect(updatedOrders).toEqual([{
            newPrice: 30
        }]);
    })
})