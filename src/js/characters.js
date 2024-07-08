class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя героя должно быть более 2 и менее 10 символов!");
        }
        if (!Character.types.includes(type)) {
            throw new Error("Такого класса нет!");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        if (["Swordsman", "Zombie"].includes(type)) {
            this.attack = 40;
            this.defence = 10;

            return;
        };
        if (["Magician", "Daemon"].includes(type)) {
            this.attack = 10;
            this.defence = 40;

            return;
        };

        this.attack = 25;
        this.defence = 25;
        
    }

    levelUp() {
        if (this.health != 0) {
            this.level += 1;
            this.attack += this.attack / 5;
            this.health = 100;

            return;
        };

        throw new Error("Нельзя повысить уровень умершего!");
    }

    damage(points) {
        if (this.health != 0) {
            this.health -= points * (1 - this.defence / 100);
            
            if(this.health < 0) {
                this.health = 0;
            };

            return;
        };

        throw new Error("Нельзя нанести урон умершему!");
    }
}

Character.types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

class Bowman extends Character {
    constructor(name) {
        super(name, "Bowman");
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman");
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon");
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, "Undead");
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, "Zombie");
    }
}

export default Character;
export {Bowman, Swordsman, Magician, Daemon, Undead, Zombie};