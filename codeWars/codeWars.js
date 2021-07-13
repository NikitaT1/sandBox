// The creation method must return an array of length 2 containing objects
// (representing Adam and Eve). The first object in the array should be an instance
// of the class Man. The second should be an instance of the class Woman.
// Both objects have to be subclasses of Human.
// Your job is to implement the Human, Man and Woman classes.

//https://www.codewars.com/kata/547274e24481cfc469000416


function one () {
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
}

// Your task is to complete the Cat class which Extends Animal 
// and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

//https://www.codewars.com/kata/55a14aa4817efe41c20000bc
// class Cat extends Animal {
//   speak(){
//     return `${this.name} meows.`;
//   }
// }

//Your job is to create a class called Song.
//A new Song will take two parameters, title and artist.
//The method takes an array of people who have listened to the song that day. 
//The output should be how many new listeners the song gained on that day out of all listeners.
//Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

//https://www.codewars.com/kata/6089c7992df556001253ba7d

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  howMany(listeners) {
    for (let listener of listeners) {
      if (!this.listeners.includes(listener.toLowerCase())) {
        this.listeners.push(listener.toLowerCase());
      }
    }
    return this.listeners.length
  }
 
} 

console.log(testing)

