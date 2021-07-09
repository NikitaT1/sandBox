let person = { name: "A" };
let objectBase = Object.getPrototypeOf(person);
const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

//console.log(objectBase)
//console.log(descriptor)

// let obj = Object.getPrototypeOf(person);
//console.log(obj)

// class Circle2 {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   draw() {
//     console.log("draw");
//   }
// }

// function Circle(radius) {
//   //instance members
//   this.radius = radius;
// }

//Prototype members
// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// Circle.prototype.toString = function(){
//     return 'Circle with radius ' + this.radius
// }

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(c1);
// console.log(c2);
// console.log(Circle);

function Shape () {

}

Shape.prototype.duplicate = function (){
  console.log('duplicate')
}

function Circle(radius){
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function (){
  console.log('draw')
}

con

