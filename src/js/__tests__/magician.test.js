import Magician from "../class/Magican";

test('Правильно создается объект', () => {
    const result = new Magician('Alexey');
    const hero = {
        name: "Alexey",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };

    expect(result).toEqual(hero);
});