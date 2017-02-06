" use strict ";

class Pet {

  constructor(name) {
    this.name = name;
  }

  get name() {
    return name;
  }

  set name(aName) {
    name = aName;
  }

  speak() {

  }

}

class Dog extends Pet {


  speak() {
    return "bark";
  }

}

class Cat extends Pet {

  speak() {
    return "meow";
  }

}

class Bird extends Pet {

  speak() {
    return "tweet";
  }

}

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){

      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var aPet = new Pet(name);

      if (type == "cat") {
      aPet = new Cat(name);
      } else if (type == "dog") {
      aPet = new Dog(name);
    } else {
      aPet = new Bird(name);
    }

      var textOut = name + " the " + type + " says " + aPet.speak() + "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
