class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
  }

  start() {
    this.interval = setInterval(()=>this.update(),1000);
  }
  stop() {
    clearInterval(this.interval);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    this.passengers.push(person);
    this.requests.push(person.destinationFloor);
    console.log(`${person.name} has enter the elevator`);
  }
  _passengersLeave(person) {
    console.log(`${person.name} has left the elevator`);
  }
  floorUp() {
    if(this.floor<this.MAXFLOOR) this.floor+=1;
    else {
      console.log("You are already on the top floor!");
      this.direction = "down";
    }
    this.waitingList.forEach((e,i)=>{
      if(e.originFloor == this.floor) {
        this._passengersEnter(e);
        this.waitingList.splice(i,1);
      }
    });
  }
  floorDown() {
    if(this.floor>0) this.floor-=1;
    else {
      console.log("Can't dig deeper than floor 0!");
      this.direction = "up";
    }
    this.passengers.forEach((e,i)=>{
      if(e.destinationFloor == this.floor) {
        this._passengersLeave(e);
        this.passengers.splice(i,1);
      }
    });
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
