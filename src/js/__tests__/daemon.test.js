import Daemon from "../class/Daemon";

test('Правильно создается объект', () => {
    const result = new Daemon('Alexey');
    const hero = {
        name: "Alexey",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };

    expect(result).toEqual(hero);
});