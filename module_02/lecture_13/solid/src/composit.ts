interface Engine {
  start(): void;
  stop(): void;
}

interface Break {
  apply(): void;
}

class TurboEngine implements Engine {
  start() {
    console.log("Turbo engine started");
  }
  stop() {
    console.log("Turbo engine stopped");
  }
}

class NormalEngine implements Engine {
  start() {
    console.log("Normal engine started");
  }
  stop() {
    console.log("Normal engine stopped");
  }
}

class NormalBreak implements Break {
  apply() {
    console.log("Normal break applied");
  }
}

class ABSBreak implements Break {
  apply() {
    console.log("ABS break applied");
  }
}

class Car {
  constructor(private engine: Engine, private carBreak: Break) {}

  start() {
    this.engine.start();
    console.log("Car started");
  }
  stop() {
    this.carBreak.apply();
    this.engine.stop();
    console.log("Car stopped");
  }

  upgradeEngine(engine: Engine) {
    this.engine = engine;
  }
}

const car = new Car(new NormalEngine(), new NormalBreak());
car.start();
car.stop();

car.upgradeEngine(new TurboEngine());
car.start();
car.stop();

car.upgradeEngine(new NormalEngine());
car.start();
car.stop();
