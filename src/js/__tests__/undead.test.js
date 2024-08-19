import Undead from "../class/Undead";

test('Правильно создается объект', () => {
    const result = new Undead('Alexey');
    const hero = {
        name: "Alexey",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(result).toEqual(hero);
});