function User(name) {
  /* new keyword make an empty object with this keyword! */
  this.name = name;
  this.admin = false;
  this.sayName = function () {
    console.log(this.name);
  };
}

const user = new User("uzair");
let hellObject = {
  name: "Hii! from hell and this will be the last word!",
};
user.sayName();
let x = user.sayName.bind(hellObject);
x();

console.log("---------------------------");
function Ladder(step) {
  if (!new.target) {
    return new Ladder(step);
  }
  this.step = step;
}

let ladder1 = Ladder(1);
console.log(ladder1, "I am ladder-1");

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a === b);
