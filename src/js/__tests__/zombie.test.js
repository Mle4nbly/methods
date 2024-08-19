import Zombie from "../class/Zombie";

test('Правильно создается объект', () => {
    const result = new Zombie('Alexey');
    const hero = {
        name: "Alexey",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    } ;
    
    expect(result).toEqual(hero);
});