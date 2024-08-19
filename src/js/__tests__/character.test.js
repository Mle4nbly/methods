import Character from "../class/Character.js";

test('Ошибка в name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow(Error);
});

test('Ошибка в type', () => {
    expect(() => new Character('Char', 'Bow')).toThrow(Error);
});

test('Ошибка в levelUp()', () => {
    const char = new Character('Alexey', 'Bowman');
    char.defence = 25;
    char.damage(500);

    expect(() => char.levelUp()).toThrow(Error);
});

test('Метод levelUp() работает правильно', () => {
    const char = new Character('Alexey', 'Bowman');
    char.attack = 25;
    char.defence = 25;
    const hero = {
        name: "Alexey",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 30,
        defence: 25,
    };
    char.levelUp();

    expect(char).toEqual(hero);
});

test('Ошибка в damage()', () => {
    const char = new Character('Alexey', 'Bowman');
    char.defence = 25;
    char.damage(500);

    expect(() => char.damage(1)).toThrow(Error);
});

test('Метод damage работает правильно', () => {
    const char = new Character('Alexey', 'Bowman');
    char.defence = 25;
    char.damage(100);

    expect(char.health).toBe(25);
});

test('Правильно создается объект', () => {
    const char = new Character('Alexey', 'Bowman');
    const hero = {
        name: "Alexey",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };

    expect(char).toEqual(hero);
});