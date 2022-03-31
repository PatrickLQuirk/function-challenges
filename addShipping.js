const addShipping = (shipping, orders) => {
    return orders.map(order => {
        order.newPrice += shipping;
        return order
    });
}

module.exports = addShipping;