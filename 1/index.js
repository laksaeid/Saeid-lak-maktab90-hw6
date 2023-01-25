"use strict";
let user = {
  name: "john",
  age: 30,
  sayHello() {
    console.log(`hello ${this.name}`);
  },
};
user.sayHello();
