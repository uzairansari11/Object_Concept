/* When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”. */

// these objects do the same

user = {
  sayHi: function () {
    alert("Hello");
  },
};

// method shorthand looks better, right?
user = {
  sayHi() {
    // same as "sayHi: function(){...}"
    alert("Hello");
  },
};

let user1 = {
  name: "John",
  age: 30,

  sayHi: function () {
    console.log(this.name);
  },
};

//  user1.sayHi(); // John

let c = { name: "uzair ansari" };
// c.x()
// let y = user1.sayHi
//     c.y()
let x = user1.sayHi.bind();

// x({name :"x"})
// console.log(Object.getPrototypeOf(c)); // Will also show the prototype of c

// console.dir(x,"i am x")
// x()

let arrowImplement = {
  name: "arrow function for this value",

  sayHi() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

arrowImplement.sayHi();

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step, "hey this is your current step on ladder");
    return this;
  },
};
ladder.up
ladder.showStep
ladder.up().showStep().down().showStep();



const calculator = {
    
}







