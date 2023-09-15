const EventEmitter = require('events');

const emitter = new EventEmitter();

// event listener
emitter.on('order-pizza', (size, toppings)=> {
  console.log(`Ordering pizza size ${size} with toppings ${toppings} is ready`)
})

// event emitter
emitter.emit('order-pizza', 'large', 'pepperoni')
emitter.emit('order-pizza', 'medium', 'mushroom')