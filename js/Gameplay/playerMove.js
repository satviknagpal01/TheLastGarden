import * as THREE from 'three';

export default class PlayerMove {
  constructor(player, key) {
    this.player = player;
    this.key = key;

    this.direction = new THREE.Vector3(0, 0, 0);

    this.init();
  }

  init() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    const keyCode = event.keyCode;
    if (keyCode === this.key.W) {
      this.direction.z = -1;
    } else if (keyCode === this.key.S) {
      this.direction.z = 1;
    } else if (keyCode === this.key.A) {
      this.direction.x = -1;
    } else if (keyCode === this.key.D) {
      this.direction.x = 1;
    }
  }

  onKeyUp(event) {
    const keyCode = event.keyCode;
    if (keyCode === this.key.W || keyCode === this.key.S) {
      this.direction.z = 0;
    } else if (keyCode === this.key.A || keyCode === this.key.D) {
      this.direction.x = 0;
    }
  }

  update() {
    this.player.player.move(this.direction);
  }
}
