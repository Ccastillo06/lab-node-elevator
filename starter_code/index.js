const Elevator = require('./elevator.js');

let elevator = new Elevator();
elevator.start();
setTimeout(()=>elevator.stop(), 5000);
