function User(name) {
  /* new keyword make an empty object with this keyword! */
  this.name = name;
  this.admin = false;
}

const user = new User("uzair");
console.log(user);

function Ladder(step) {
  if (!new.target) {
    return new Ladder(step);
  }
  this.step = step;
}

let ladder1 = Ladder(1);
console.log(ladder1, "I am ladder-1");
