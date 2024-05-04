let message = "Hello!";
let phrase = message;

message = "something";

console.log(message, "...I am message variable...");

console.log(phrase, "...I am phrase variable...");

let user = {
  name: "uzair",
  age: 20,
};

let newUser = user;
console.log(user, "this is user");

newUser.age = 22;

console.log(newUser, "this is user");

/* Object always copied or stored as a reference so if you change
it will reflect in everywhere  */

/* comparison  by reference */

let a = {};
let b = {};

console.log(a === b); // false because have different reference

let s = {
  name: "xyz",
};

let t = s;

console.log(s === t); // true because have same reference

let copyOne = {
  name: "uzair",
  age: 20,
};

let copiedOne = {};

for (let props in copyOne) {
  copiedOne[props] = copyOne[props];
}
console.log(copiedOne, "<=== Hey I am copied object here ===>");

/* copy object user assign method */

let obj1 = {
  name: "uzair",
  age: 20,
};

let obj2 = {
  city: "mumbai",
  country: "india",
};

/* Coping objects in a targeted object using the assign method */
const copiedAssignmentObject = {};
Object.assign(copiedAssignmentObject, obj1, obj2);
const newOneAssign = Object.assign({}, obj1, obj2);

console.log(copiedAssignmentObject, "<== Copied Assignment Object ==>");
console.log(newOneAssign, "<== Copied newOneAssign Object ==>");

/* Nested cloning */

let user2 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let user3 = structuredClone(user2);
console.log(user3);

/* note :> structuredClone fails if there is function associated with object 
for that we can use custom one or 
let c = json.stringify(obj)
let d = json.parse(c)
*/
