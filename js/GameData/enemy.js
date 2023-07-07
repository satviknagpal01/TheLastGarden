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
    caster: {
        health: 60,
        damage: 20,
        attackSpeed: 1.5,
        range: 8,
        speed: 1,
        defense: 2,
        gold: 15,
        exp: 20
    },
    stealth: {
        health: 50,
        damage: 8,
        attackSpeed: 1,
        range: 1,
        speed: 2,
        defense: 5,
        gold: 5,
        exp: 10
    },
    swarm: {
        health: 20,
        damage: 5,
        attackSpeed: 1,
        range: 1,
        speed: 1.5,
        defense: 2,
        gold: 2,
        exp: 5
    },
    flying: {
        health: 70,
        damage: 12,
        attackSpeed: 1,
        range: 3,
        speed: 2,
        defense: 3,
        gold: 10,
        exp: 15
    },
    elemental: {
        health: 90,
        damage: 18,
        attackSpeed: 1.5,
        range: 4,
        speed: 1,
        defense: 5,
        gold: 15,
        exp: 20
    },
    mimic: {
        health: 120,
        damage: 12,
        attackSpeed: 1,
        range: 1,
        speed: 1,
        defense: 10,
        gold: 10,
        exp: 15
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