var Human = /** @class */ (function () {
    function Human(name, age, location) {
        if (location === void 0) { location = "India"; }
        this.name = name;
        this.age = age;
        this.location = location;
        Human.population.push(this);
    }
    Human.prototype.sayName = function () {
        console.log(this.name);
    };
    Human.population = [];
    return Human;
}());
var anuj = new Human("Anuj", 28);
var ravish = new Human("Ravish", 25);
var rahul = new Human("Rahul", 26);
console.log(Human.population);
// anuj.sayName();
