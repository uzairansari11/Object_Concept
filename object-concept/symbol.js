let user = {
  id: 1,
  name: "uzair",
};

/* for global  registry */
let age = Symbol.for("age");
let newAge = Symbol.for("age");

user[age] = 30;
user[newAge] = 20;

console.log(user[age])