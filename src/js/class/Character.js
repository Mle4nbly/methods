export default class Character {
    constructor(name, type) {
        const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя героя должно быть более 2 и менее 10 символов!");
        } else {
            this.name = name;
        }
        if (!types.includes(type)) {
            throw new Error("Такого класса нет!");
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
        
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
};