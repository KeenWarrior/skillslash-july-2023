class Human {
    static totalPeople = 0;

    constructor(name) {
        this.name = name;
        Human.totalPeople++;
    }
}

const p1 = new Human('Rahul');

console.log(Human.totalPeople);
console.log(p1.name);

