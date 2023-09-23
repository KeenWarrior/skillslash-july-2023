interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  makeSound(): void;
}

class Duck {
  swim() {
    console.log("swim");
  }
}

class RubberDuck extends Duck implements QuackBehavior {
  swim() {
    console.log("swim");
  }
  makeSound() {
    console.log("squeak");
  }
}

class MallardDuck extends Duck implements FlyBehavior, QuackBehavior {
  fly(): void {
    console.log("fly");
  }

  makeSound(): void {
    console.log("quack");
  }
}

const duck: Duck = new MallardDuck();
duck.swim();
