import * as THREE from 'three';

import playerStats from './GameData/playerStats';
import Player from './Components/Player';

import key from './GameData/key';

class Game {
  constructor() {
    this.canvas = document.getElementById('game-container');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.camera.position.z = 5;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.onWindowResize = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.onWindowResize);
  }

  start() {
    this.playerStats = playerStats;
    this.key = key;
    this.player = new Player(this.scene, this.camera, this.renderer, this.playerStats,this.key);

    this.gameLoop();
  }

  update() {
    this.player.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  gameLoop = () => {
    requestAnimationFrame(this.gameLoop);
    this.render();
    this.update();
  };

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

export default Game;
