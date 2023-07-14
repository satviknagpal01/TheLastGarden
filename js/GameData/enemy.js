const enemyTypes = {
    melee: {
        health: 100,
        damage: 10,
        attackSpeed: 1,
        range: 1,
        speed: 1,
        defense: 10,
        gold: 0,
        exp: 0
    },
    ranged: {
        health: 80,
        damage: 15,
        attackSpeed: 2,
        range: 5,
        speed: 1,
        defense: 5,
        gold: 10,
        exp: 15
    },
    tank: {
        health: 200,
        damage: 5,
        attackSpeed: 0.5,
        range: 1,
        speed: 0.5,
        defense: 20,
        gold: 20,
        exp: 25
    },
    boss: {
        health: 500,
        damage: 25,
        attackSpeed: 1,
        range: 2,
        speed: 1,
        defense: 30,
        gold: 100,
        exp: 100
    }
};

export default enemyTypes;