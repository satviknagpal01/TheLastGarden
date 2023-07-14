import * as THREE from 'three';

export default class Player{
    constructor(scene, camera, renderer, playerStats,key){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.player = null;
        this.playerStats = playerStats;
		this.key = key;
        this.start();
    }

    start(){
        this.player = new THREE.Sprite(
            new THREE.MeshBasicMaterial({color: 0x00fff0})
        );

        this.scene.add(this.player);

        this.player.position.set(0, 0, 0);
        this.setPlayerStats();
    }

    setPlayerStats(){
        this.playerStats.health = 100;
        this.playerStats.maxHealth = 100;
        this.playerStats.HPRegeneration = 0;
        this.playerStats.stamina = 100;
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
            armor: null,
            accessory: null
        };
    }

	playerMove(){
        this.direction = new THREE.Vector3();
		if(this.key.isDown(this.key.W)){
			this.direction.y += 1;
		}
		if(this.key.isDown(this.key.S)){
			this.direction.y -= 1;
		}
		if(this.key.isDown(this.key.A)){
			this.direction.x -= 1;
		}
		if(this.key.isDown(this.key.D)){
			this.direction.x += 1;
		}
        this.direction.normalize();
        this.direction.multiplyScalar(this.playerStats.Speed / 20);
        this.player.position.add(this.direction);
	}

    playerAttack(){
        this.direction = new THREE.Vector3();
        if(this.key.isDown(this.key.UP)){
            this.direction.y += 1;
        }
        if(this.key.isDown(this.key.DOWN)){
            this.direction.y -= 1;
        }
        if(this.key.isDown(this.key.LEFT)){
            this.direction.x -= 1;
        }
        if(this.key.isDown(this.key.RIGHT)){
            this.direction.x += 1;
        }
        this.direction.normalize();
        this.direction.multiplyScalar(this.playerStats.Speed / 10);
    }

    update(){
		this.playerMove();
    }
}
