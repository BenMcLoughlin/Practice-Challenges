const array_proto = {
  sayHi() {
    console.log(Object.values(this));
    return this;
  },
};

const array = [1, 2, 3, 4];

const myarray = Object.assign(Object.create(array_proto), array);

console.log(array_proto.isPrototypeOf(myarray));

console.log("myarray.sayHi():", myarray.sayHi());
