import * as THREE from 'three';

export default class Player{
    constructor(scene, camera, renderer, playerStats){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.player = null;
        this.playerStats = playerStats;
        this.init();
    }

    init(){
        this.player = new THREE.Sprite(
            new THREE.MeshBasicMaterial({color: 0x00ff00})
        );

        this.scene.add(this.player);

        this.player.position.set(0, 0, 0);
        this.playerStats.health = 100;
        this.playerStats.maxHealth = 100;
        this.playerStats.HPRegeneration = 0;
        this.playerStats.lifeSteal = 0;
        this.playerStats.damage = 10;
        this.playerStats.attackSpeed = 1;
        this.playerStats.Range = 1;
        this.playerStats.Speed = 1;
        this.playerStats.defense = 10;
        this.playerStats.CritChance = 0;
        this.playerStats.CritDamage = 1.5;
        this.playerStats.gold = 0;
        this.playerStats.level = 1;
        this.playerStats.exp = 0;
        this.playerStats.expToNextLevel = 100;
        this.playerStats.luck = 0;
        this.playerStats.inventory = [];
        this.playerStats.equipped = {
            weapon: null,
            armor: null,
            accessory: null
        };
    }

    update(){
    }
}
