import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.items = []
    }

    addItem = (item, count) => {
        this.items.push({
            item: item,
            count: count
        })
    }

    getItems = () => {
        return this.items;
    }

    getCost = () => {
        return this.items.reduce((acc, i) => acc + i.item.price * i.count, 0)
    }

    getCount = () => {
        return this.items.reduce((acc, i) => acc + i.count, 0);
    }
}

export default Cart;
// END
