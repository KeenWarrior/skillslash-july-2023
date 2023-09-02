class Printer {
  print() {
    console.log("print");
  }
}

class HP230 extends Printer {
  print() {
    console.log("print like HP230");
  }
}

const printer: Printer = new HP230();

printer.print();

