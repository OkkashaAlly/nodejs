// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // event listener
// emitter.on('order-pizza', (size, toppings)=> {
//   console.log(`Ordering pizza size ${size} with toppings ${toppings} is ready`)
// })

// // event emitter
// emitter.emit('order-pizza', 'large', 'pepperoni')
// emitter.emit('order-pizza', 'medium', 'mushroom')

const PizzaShop = require('./pizza-shop');
const DrinkingMachine = require('./drinking-machine');

const pizzaShop = new PizzaShop();
const drinkingMachine = new DrinkingMachine();

pizzaShop.on('order-pizza', (size, toppings)=> {
    console.log(`Ordering pizza size ${size} with toppings ${toppings} is ready`);
    drinkingMachine.serveDrink(size);
});



pizzaShop.order('large', 'mashroom');
pizzaShop.order('medium', 'mashroom');
pizzaShop.getPizzas();