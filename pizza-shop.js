const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.pizzas = 0;
    }

    order(size, toppings) {
        this.pizzas++;
        this.emit('order-pizza', size, toppings);
    }

    getPizzas() {
        console.log(`Total pizzas: ${this.pizzas}`);
    }
}

module.exports = PizzaShop;