class Student {
  nama;
  email;
  batch;
  gender;
  location = "indonesia";

  constructor(_name, _email, _batch, _gender) {
    this.nama = _name;
    this.email = _email;
    this.batch = _batch;
    this.gender = _gender;
  }
}

const studentBudi = new Student(
  "budi",
  "budi@gmail.com",
  "jcwdoham004",
  "male"
);

const studentSara = new Student(
  "sara",
  "sara@gmail.com",
  "jcwdoham004",
  "female"
);
studentBudi.color = "red";
console.log(studentBudi);
console.log(studentSara);

class Product {
  #name = "keyboard";
  price = 25000;

  getProduct() {
    return { name: this.#name, price: this.price };
  }

  updateName(name) {
    this.#name = name;
  }
}

const newProduct = new Product();
console.log(newProduct.getProduct());
newProduct.updateName("mouse");
newProduct.price = 5000;
console.log(newProduct.getProduct());

// INHERITANCE
class Animal {
  name;
  species;
  environment;

  constructor(_name, _species, _environment) {
    this.name = _name;
    this.species = _species;
    this.environment = _environment;
  }

  speak() {
    return "mengeluarkan suara";
  }
}

class Cat extends Animal {
  constructor(_name, _species, _environment) {
    super(_name, _species, _environment);
  }

  speak() {
    return "meow";
  }
}

class Dog extends Animal {
  constructor(_name, _species, _environment) {
    super(_name, _species, _environment);
  }

  speak() {
    return "woof";
  }
}

class Snake extends Animal {
  constructor(_name, _species, _environment) {
    super(_name, _species, _environment);
  }
}
class Lumbalumba extends Animal {
  constructor(_name, _species, _environment) {
    super(_name, _species, _environment);
  }
}

const kucing = new Cat("cat", "feline", "earth");
const anjing = new Dog("dog", "canine", "earth");
const ular = new Snake("snake", "snake", "earth");
const lumba = new Lumbalumba("lumba", "snake", "earth");

console.log(kucing.speak());
console.log(anjing.speak());
console.log(ular.speak());
console.log(lumba.speak());
// class AnimalHaveLegs extends Animal {
//   legs;

//   constructor(_species, _environment, _legs) {
//     super(_species, _environment);
//     this.legs = _legs;
//   }
// }

// class AnimalHaveFin extends Animal {
//   fin;

//   constructor(_species, _environment, _fin) {
//     super(_species, _environment);
//     this.fin = _fin;
//   }
// }

// const macan = new AnimalHaveLegs("tiger", "earth", 4);
// console.log(macan);

// const lumbaLumba = new AnimalHaveFin("dolphin", "water", 3);
// console.log(lumbaLumba);

class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    this.#brewCoffee();
    this.#pourCoffee();
    console.log("Coffee done");
  }
  #boilWater() {
    console.log("Boil water");
  }

  #brewCoffee() {
    console.log("Brew Coffee");
  }

  #pourCoffee() {
    console.log("Pour coffee");
  }
}

const buatKopi = new CoffeeMachine();
buatKopi.makeCoffee();
