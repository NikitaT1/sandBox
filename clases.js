class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //instance method
  draw(){
    console.log(this.radius)
  }

  //static method. We use static methods to create utility functions
  static parse(str){
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

const circle = Circle.parse('{ "radius": 1 }')
console.log(circle)
const a = new Circle(a)