class Animal {
    constructor(name) {
        this.name = (name || 'Unknown animal');
    }

    getName() {
        return this.name;
    }

    say(message) {
        const content = `${this.name}: ${message}`;
        console.log(content);
    }
}

class Dog extends Animal {
    constructor(name, type) {
        super(name)
        this.type = (type || '');
    }

    getType() {
        return this.type;
    }
}

class Cat extends Animal {
    /**
     * @param {String[]} eatList
     */
    constructor(name, eatList) {
        super(name)
        this.eatList = (eatList || ['']);
    }

    getEatList() {
        return this.eatList;
    }
}

const tiger = new Animal('ttt');
const dog = new Dog('foo', '土狗');
const cat = new Cat('www', ['魚', '罐罐']);

tiger.say('吼');
dog.say('汪');
cat.say('喵');



console.log(123);
console.log('dog');

