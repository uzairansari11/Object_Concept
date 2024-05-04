/* Object creation */

let user = new Object(); //object constructor syntax
let user1 = {}; // object literal syntax

/* Object properties */
user.name = "uzair";
user.age = 22;
user["like birds"] = true; // multi word property name must be quoted
/* delete property */

delete user.name;

/* accessing multi word property we must use the bracket notation */
console.log(user["like birds"], "this is user");

let key = "like birds";

console.log(user[key], "this is user"); //true

console.log(user.key, "this is user"); //undefined

/* checking a property exists or not in object */

let car = {
  name: "honda city",
  color: "red",
  year: 2018,
  price: 1000000,
  launchedInIndia: undefined,
};

console.log("launchedInIndia" in car, "this is car"); //true

console.log(car.launchedInIndia); //undefined
console.log(car);

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code); // 1, 41, 44, 49
}
