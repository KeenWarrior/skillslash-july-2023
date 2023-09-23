class Human {
  name: string;
  age: number;
  private location: string;

  static population: Array<Human> = [];

  constructor(name: string, age: number, location: string = "India") {
    this.name = name;
    this.age = age;
    this.location = location;

    Human.population.push(this);
  }

  sayName() {
    console.log(this.name);
  }
}

const anuj = new Human("Anuj", 28);
const ravish = new Human("Ravish", 25);
const rahul = new Human("Rahul", 26);
console.log(Human.population);

// anuj.sayName();
