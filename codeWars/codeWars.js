// The creation method must return an array of length 2 containing objects
// (representing Adam and Eve). The first object in the array should be an instance
// of the class Man. The second should be an instance of the class Woman.
// Both objects have to be subclasses of Human.
// Your job is to implement the Human, Man and Woman classes.

//https://www.codewars.com/kata/547274e24481cfc469000416

class God {
  static create() {
    const newMan = new Man();
    const newWoman = new Woman();
    return [newMan, newWoman];
  }
}
class Human {
  constructor() {}
}
class Man extends Human {
  constructor() {
    super();
  }
}
class Woman extends Human {
  constructor() {
    super();
  }
}
