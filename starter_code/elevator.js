class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
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
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor<this.MAXFLOOR) this.floor+=1;
    else console.log("You are already on the top floor!");
  }
  floorDown() {
    if(this.floor>0) this.floor-=1;
    else console.log("Can't dig deeper than floor 0!");
  }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
