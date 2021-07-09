//'use strict'
// const A = function () {
//   this.draw = function () {
//     console.log(this);
//   };
// };

// class A {
//     constructor() {
//         this.draw = function () {
//             console.log(this);
//         };
//     }
// }


// class A {
//   draw() {
//     console.log(this);
//   }
// }

// const c = new A();
// const draw = c.draw;
// c.draw();
// draw();

function a (){
  this.method = function(){
    console.log(this)
  }
}

const b = new a()
b.method()
const c = b.method
c()

class D {
  method(){
    console.log(this)
  }
}

const e = new D()
e.method()
const f = e.method
f()