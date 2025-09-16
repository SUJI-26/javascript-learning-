// ===============================
// ✅ "this" keyword
// ===============================

// function createCharacter → object return pannum
function createCharacter(name) { // name argument receive pannum
    return {
        name: name, // object ku assign pannum
        greet: function() {
            console.log(`${this.name} says hello`); // 'this' points to object
        }
    };
}

const character1 = createCharacter('Suji'); // 'Suji' pass pannrom
character1.greet(); // output: Suji says hello

// 👉 this → function inside object refer pannum object itself


// ===============================
// ✅ "new" keyword
// ===============================
// new → function constructor la use pannina object create aagum

function Character(name) {
    this.name = name; // this → newly created object
}
const character2 = new Character('Suji');
console.log(character2); // output: Character { name: 'Suji' }


// ===============================
// ✅ Prototype
// ===============================

// object methods share panna prototype use pannuvom
const characterProto = {
    attack: function() {
        console.log('Swing'); // common method
    },
};

const fighter = {
    name: 'Hulk',
    __proto__: characterProto, // prototype attach pannidom
};

fighter.attack(); // output: Swing
// 👉 fighter object attack method use pannitu prototype la irundha function call pannum


// ===============================
// ✅ Class
// ===============================
// Class → modern way of creating object + prototype methods

class Hero {
    constructor(name) {
        this.name = name; // object property
    }

    greet() { // prototype method
        console.log(`${this.name} says hello`); 
    }
}

const hero1 = new Hero('Suji');
hero1.greet(); // output: Suji says hello
