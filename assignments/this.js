/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is everything
* 2. implicit binding is used for dot notation
* 3. new binding uses constructors
* 4. explicit binding uses call or appl which are 2 different methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Ryan');
// another example with .this

const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(jerry);
newman.speak.apply(newman);