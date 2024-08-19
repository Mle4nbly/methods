import Bowman from "../class/Bowerman";

test('Правильно создается объект', () => {
    const result = new Bowman('Alexey');
    const hero = {
        name: "Alexey",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(result).toEqual(hero);
});