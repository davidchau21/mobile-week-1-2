// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this; // Allow method chaining
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is slowing down to ${this.speed} km/h`);
      return this; // Allow method chaining
    }
  }
  
  class EVCl extends CarCl {
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make}'s battery is now charged to ${chargeTo}%`);
      return this; // Allow method chaining
    }
  
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log(
        `${this.make} is an electric car, accelerating to ${this.speed} km/h with ${this.#charge}% charge`
      );
      return this; // Allow method chaining
    }
  }
  
  const rivian = new EVCl('Rivian', 120, 23);
  rivian
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();
  