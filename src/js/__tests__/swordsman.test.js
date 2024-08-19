import Swordsman from "../class/Swordsman";

test('Правильно создается объект', () => {
    const result = new Swordsman('Alexey');
    const hero = {
        name: "Alexey",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };

    expect(result).toEqual(hero);
});