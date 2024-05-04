let user = {
  name: "john",
};
admin = user;
// console.log(admin.name);

user = null;

console.log(user);
console.log(admin.name);

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

console.log(family);