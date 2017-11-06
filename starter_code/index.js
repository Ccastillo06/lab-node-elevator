const Elevator = require('./elevator.js');
const Person = require('./person.js');

// Bonus.
let elevator = new Elevator();
elevator.start();

let movement = setInterval(()=>{
  if(elevator.direction=="up") elevator.floorUp();
  if(elevator.direction=="down") elevator.floorDown();
},1000);

let createPerson = setInterval(()=>{
  let ori = Math.floor(Math.random()*11);
  let dest = Math.floor(Math.random()*11);
  let person = new Person("newPerson", ori, dest);
  elevator.call(person);
}, 3000);
